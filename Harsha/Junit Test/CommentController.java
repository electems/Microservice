package com.example.postgresdemo.controller;

import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.postgresdemo.model.Comment;
import com.example.postgresdemo.repository.CommentRepository;

@RestController
@CrossOrigin
public class CommentController {

	private final CommentRepository commentRepository;

	@Autowired
	public CommentController(CommentRepository commentRepository) {
		this.commentRepository = commentRepository;
	}

	@GetMapping("comments/tutorials/{id}")
	public List<Comment> getCommentByTutorialId(@PathVariable(value = "id") Integer tutorialId) {
		List<Comment> comment = commentRepository.findByTutorialId(tutorialId);
		System.out.println(comment);
		return comment;
	}

	@PostMapping("/addComments")
	public String addComment(@Valid @RequestBody Comment comment, BindingResult result3, Model model) {
		if (result3.hasErrors()) {
			return "comment";
		}
		commentRepository.save(comment);
		return "Comment data added";
	}
}
