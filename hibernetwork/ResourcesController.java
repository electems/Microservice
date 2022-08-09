package com.example.postgresdemo.controller;

import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.postgresdemo.exception.ResourceNotFoundException;
import com.example.postgresdemo.model.Resourse;
import com.example.postgresdemo.repository.ProductRepository;
import com.example.postgresdemo.repository.ResourcesRepository;

@RestController
public class ResourcesController {

	@Autowired
	private ResourcesRepository resourcesRepository;

	@Autowired
	private ProductRepository productRepository;

	// this method is to get the list of resources
	@GetMapping("/products/{productId}/resourse")
	public List<Resourse> getResourseByProductId(@PathVariable Long productId) {
		return resourcesRepository.findByproductId(productId);
	}

	// this method is for adding the resources to the table
	// with respect to product id
	@PostMapping("/products/{productId}/resourse")
	public Resourse addresourse(@PathVariable Long productId, @Valid @RequestBody Resourse resourse) {
		return productRepository.findById(productId).map(product -> {
			resourse.setProduct(product);
			return resourcesRepository.save(resourse);
		}).orElseThrow(() -> new ResourceNotFoundException("products not found with id " + productId));
	}

	// this method is for updating the resources
	// with respect to product id and resource id
	@PutMapping("/products/{productId}/answers/{resourseId}")
	public Resourse updateresourser(@PathVariable Long productId, @PathVariable Long resourseId,
			@Valid @RequestBody Resourse resourseRequest) {
		if (!productRepository.existsById(productId)) {
			throw new ResourceNotFoundException("products not found with id " + productId);
		}
		return resourcesRepository.findById(resourseId).map(resourse -> {
			resourse.setText(resourseRequest.getText());
			return resourcesRepository.save(resourse);
		}).orElseThrow(() -> new ResourceNotFoundException("resourse not found with id " + resourseId));
	}

	// this method is for deleting the resources
	// with respect to product id
	@DeleteMapping("/questions/{productId}/resourse/{resourseId}")
	public ResponseEntity<?> deleteresourse(@PathVariable Long productId, @PathVariable Long resourseId) {
		if (!productRepository.existsById(productId)) {
			throw new ResourceNotFoundException("questions not found with id " + productId);
		}
		return resourcesRepository.findById(resourseId).map(resourse -> {
			resourcesRepository.delete(resourse);
			return ResponseEntity.ok().build();
		}).orElseThrow(() -> new ResourceNotFoundException("resourse not found with id " + resourseId));
	}
}
