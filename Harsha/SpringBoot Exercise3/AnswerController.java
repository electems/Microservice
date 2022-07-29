package com.example.postgresdemo.controller;

import com.example.postgresdemo.exception.ResourceNotFoundException;
import com.example.postgresdemo.model.Answer;
import com.example.postgresdemo.repository.AnswerRepository;
import com.example.postgresdemo.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
public class AnswerController {

	@Autowired
	private AnswerRepository answerRepository;

	@Autowired
	private QuestionRepository questionRepository;

	// This method is used to get answers data from the database.
	@GetMapping("/questions/answers")
	public List<Answer> getAnswers() {
		return answerRepository.findAll();
	}

	// This method is used to add answers into database using questionId
	@PostMapping("/questions/{questionId}/answers")
	public Answer addAnswer(@PathVariable Long questionId, @Valid @RequestBody Answer answer) {
		return questionRepository.findById(questionId).map(question -> {
			answer.setQuestion(question);
			return answerRepository.save(answer);
		}).orElseThrow(() -> new ResourceNotFoundException("Question not found with id " + questionId));
	}
}
