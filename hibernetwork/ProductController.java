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
import com.example.postgresdemo.model.Product;
import com.example.postgresdemo.model.Question;
import com.example.postgresdemo.repository.ProductRepository;

@RestController
public class ProductController {

	@Autowired
	private ProductRepository productRepository;

	// this method is to get the list of products
	@GetMapping("/products")
	public List<Product> getProduct() {
		return productRepository.findAll();
	}

	// this method is to create products
	@PostMapping("/products")
	public Product createProduct(@Valid @RequestBody Product product) {
		return productRepository.save(product);
	}
	// this method is for updating the product
		// with respect to product id
		@PutMapping("/products/{productId}")
		public Product updateProduct(@PathVariable Long productId, @Valid @RequestBody Product productRequest) {
			return productRepository.findById(productId).map(product -> {
				product.setProductname(productRequest.getProductname());
				product.setProductdescription(productRequest.getProductdescription());
				return productRepository.save(product);
			}).orElseThrow(() -> new ResourceNotFoundException("product not found with id " + productId));
		}

		// this method is to delete the product record
		// with respect to the product id
		@DeleteMapping("/products/{productId}")
		public ResponseEntity<?> deleteProduct(@PathVariable Long productId) {
			return productRepository.findById(productId).map(product -> {
				productRepository.delete(product);
				return ResponseEntity.ok().build();
			}).orElseThrow(() -> new ResourceNotFoundException("product not found with id " + productId));
		}
}
