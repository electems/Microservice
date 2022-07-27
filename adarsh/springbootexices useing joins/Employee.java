package com.example.postgresdemo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

//Entity data are created to create a table in database
//the condition of creating the table is mentioned
@Entity
@Table(name = "employee")
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@NotBlank(message = "Name is mandatory")
	private String name;

	public Employee() {
	}

	public Employee(long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	// all the getter and setter methods are created for the variables used
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	// adding to string method
	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + "]";
	}
}
