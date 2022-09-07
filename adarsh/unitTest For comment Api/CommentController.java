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

//this is the controller class
@RestController
@CrossOrigin
public class CommentController {
	// repository class of comment model
	private CommentRepository commentRepo;

	// Constructor for controller class
	
	public CommentController(CommentRepository commentRepo) {
		this.commentRepo = commentRepo;
	}

	// this method will get the comments based on the tutorial id
	@GetMapping("/coments/{id}")
	public List<Comment> getcoments(@PathVariable(value = "id") Integer tutorialId) {
		List<Comment> comment = commentRepo.findAllCommentsBasedOnTutorialId(tutorialId);
		return comment;

	}

	// this method will post the comments
	@PostMapping("/addComment")
	public String addComment(@Valid @RequestBody Comment comment, BindingResult result, Model model) {
		if (result.hasErrors()) {
			return "comment";
		}
		commentRepo.save(comment);
		return "Comment data added";
	}

}
