package com.example.postgresdemo.controller;

import java.util.List;
import java.util.Optional;

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

@RestController
@CrossOrigin
public class CommentController {

	private CommentRepository commentRepo;

	@Autowired
	public CommentController(CommentRepository commentRepo) {
		this.commentRepo = commentRepo;
	}

	@GetMapping("/coments/{id}")
	public List<Comment> getcoments(@PathVariable(value = "id") Integer tutorialId) {
		List<Comment> comment = commentRepo.findAllCommentsBasedOnTutorialId(tutorialId);
		return comment;

	}

	@PostMapping("/addComment")
	public String addComment(@Valid @RequestBody Comment comment, BindingResult result, Model model) {
		if (result.hasErrors()) {
			return "comment";
		}
		commentRepo.save(comment);
		return "Comment data added";
	}

}
