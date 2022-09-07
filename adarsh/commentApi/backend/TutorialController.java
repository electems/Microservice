package com.example.postgresdemo.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.postgresdemo.exception.ResourceNotFoundException;
import com.example.postgresdemo.model.Tutorial;
import com.example.postgresdemo.repository.TutorialRepository;

//this is a controller class 
@RestController
@CrossOrigin
public class TutorialController {
 
	private  TutorialRepository tutorialRepo;
	

	@Autowired
	public TutorialController(TutorialRepository tutorialRepo) {
		this.tutorialRepo = tutorialRepo;
	}
	@Autowired
	public  CommentRepository commentRepo;

	@GetMapping("/tutorials/{id}")
	public ResponseEntity<Tutorial> getTutorialById(@PathVariable(value = "id") Integer tutorialId)
			throws ResourceNotFoundException {
		Tutorial tutorial = tutorialRepo.findById(tutorialId)
				.orElseThrow(() -> new ResourceNotFoundException("File not found :: " + tutorialId));
				
		return ResponseEntity.ok().body(tutorial);
	}
	// This method is used to get students data from the Database.
	@GetMapping("/tutorials")
	public Iterable<Tutorial> getTutorialData() {
		 Iterable<Tutorial> tutorials = tutorialRepo.findAll();
		 return tutorials;
	}
	// This method is used to add students to Database
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/addTutorials")
	public String addTutorial(@Valid @RequestBody Tutorial tutorial, BindingResult result2, Model model) {
		if (result2.hasErrors()) {
			return "tutorial";
		}
		tutorialRepo.save(tutorial);
		return "Tutorial data added";
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/updateTutorials")
	public String updateTutorial(@Valid @RequestBody Tutorial tutorial, BindingResult result2, Model model) {
		if (result2.hasErrors()) {
			return "update-Tutorial";
		}
		tutorialRepo.save(tutorial);
		return "Tutorial data updated";
	}

	@GetMapping("/deleteTutorialData/{id}")
	public String deleteTutorial(@PathVariable("id") int id, Model model) {
		Tutorial tutorial = tutorialRepo.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("Invalid Tutorial id: " + id));
		tutorialRepo.delete(tutorial);
		return "Tutorial data deleted";
	}
	
	
}
