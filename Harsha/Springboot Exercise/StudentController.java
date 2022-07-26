package com.example.postgresdemo.controller;

import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.postgresdemo.model.Student;
import com.example.postgresdemo.repository.StudentRepository;

@RestController
public class StudentController {

	private final StudentRepository studentRepository;

	@Autowired
	public StudentController(StudentRepository studentRepository) {
		super();
		this.studentRepository = studentRepository;
	}

	// This method is used to get students data from the Database.
	@GetMapping("/studentData")
	public List<Student> getQuestions() {
		return (List<Student>) this.studentRepository.findAll();
	}

	// This method is used to add students to Database
	@PostMapping("/addStudent")
	public String addStudent(@Valid @RequestBody Student student, BindingResult result, Model model) {
		if (result.hasErrors()) {
			return "addStudent";
		}
		studentRepository.save(student);
		return "Student data added";
	}

	// This method is used to delete a data from Database using student_id
	@GetMapping("/studentData/{id}")
	public String deleteStudent(@PathVariable("id") int id, Model model) {
		Student student = studentRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("Invalid student id: " + id));
		studentRepository.delete(student);
		return "Student data deleted";
	}
}
