package com.example.postgresdemo.controller;

import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.postgresdemo.model.Question;
import com.example.postgresdemo.repository.QuestionRepository;

@RestController
public class QuestionController {

	@Autowired
	private QuestionRepository questionRepository;

	// This method is used to get questions data from the database.
	@GetMapping("/getQuestions")
	public List<Question> getQuestions() {
		return questionRepository.findAll();
	}

	// This method is used to add questions into the database.
	@PostMapping("/addQuestions")
	public Question createQuestion(@Valid @RequestBody Question question) {
		return questionRepository.save(question);
	}
}
