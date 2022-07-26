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

import com.example.postgresdemo.model.Employee;
import com.example.postgresdemo.repository.EmplouyeeRepository;

@RestController
public class EmployeeController {
	private final EmplouyeeRepository emplouyeeRepository;

	@Autowired
	public EmployeeController(EmplouyeeRepository emplouyeeRepository) {
		this.emplouyeeRepository = emplouyeeRepository;
	}

	// this is for getting the employee data
	// Storing it in the database
	@GetMapping("/employerData")
	public List<Employee> getAllEmployee() {
		return (List<Employee>) this.emplouyeeRepository.findAll();
	}

	// this method is for adding the employee dat.
	// storing it in the database
	@PostMapping("/addemployee")
	public String addemployee(@Valid @RequestBody Employee employee, BindingResult result, Model model) {
		if (result.hasErrors()) {
			return "add-employee";
		}
		emplouyeeRepository.save(employee);
		return "redirect:/index";
	}
	
	// this method is for deleting the employee data
	//from the database
	@GetMapping("/employeeData/{id}")
	public String deleteemployee(@PathVariable("id") long id, Model model) {
		Employee employee = emplouyeeRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("Invalid user Id:" + id));
		emplouyeeRepository.delete(employee);
		return "redirect:/index";
	}
}
