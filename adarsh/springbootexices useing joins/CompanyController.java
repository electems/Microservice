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
import com.example.postgresdemo.model.Company;
import com.example.postgresdemo.repository.CompanyRepository;

@RestController
public class CompanyController {
	private final CompanyRepository companyRepository;

	@Autowired
	public CompanyController(CompanyRepository companyRepository) {
		this.companyRepository = companyRepository;
	}

	// this is for getting the company data
	// Storing it in the database
	@GetMapping("/companyData")
	public List<Company> getAllcompany() {
		return (List<Company>) this.companyRepository.findAll();
	}

	// this method is for adding the company data
	// storing it in the database
	@PostMapping("/addcompay")
	public String addcompay(@Valid @RequestBody Company company, BindingResult result2, Model model) {
		if (result2.hasErrors()) {
			return "add-company";
		}
		companyRepository.save(company);
		return "redirect:/index";
	}

	// this method is for deleting the company data
	// from the database
	@GetMapping("/companyData/{id}")
	public String deletecompany(@PathVariable("id") long id, Model model) {
		Company company = companyRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("Invalid user Id:" + id));
		companyRepository.delete(company);
		return "redirect:/index";
	}

	// this method is for updating the company data
	// from the database
	@GetMapping("/updatecompany/{id}")
	public String updatecompany(@PathVariable("id") long id, @Valid @RequestBody Company company, BindingResult result2,
			Model model) {
		if (result2.hasErrors()) {
			company.setId(id);
			return "update-employee";
		}
		companyRepository.save(company);
		return "redirect:/index";
	}
}
