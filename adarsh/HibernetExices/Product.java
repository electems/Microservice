package com.example.postgresdemo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "product")
public class Product extends AuditModel {
	@Id
	@GeneratedValue(generator = "product_generator")
	@SequenceGenerator(name = "product_generator", sequenceName = "product_sequence", initialValue = 10)
	private Long id;

	@NotBlank
	@Size(min = 3, max = 100)
	private String productname;

	@Column(columnDefinition = "text")
	private String productdescription;

	// adding getter and setter for the filds
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getProductname() {
		return productname;
	}

	public void setProductname(String productname) {
		this.productname = productname;
	}

	public String getProductdescription() {
		return productdescription;
	}

	public void setProductdescription(String productdescription) {
		this.productdescription = productdescription;
	}
}