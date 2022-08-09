package com.example.postgresdemo.model;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "company")
public class Company {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@NotBlank(message = "Name is mandatory")
	private String Companyname;
	@NotBlank(message = "adress is mandatory")
	private String Companyadress;
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "company_id")
	private List<Employee> employee;

	public Company(long id, String companyname, String companyadress, List<Employee> employee) {
		super();
		this.id = id;
		Companyname = companyname;
		Companyadress = companyadress;
		this.employee = employee;
	}

	// creating default constructed
	public Company() {
	}

	// adding getter and setter for the variables
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCompanyname() {
		return Companyname;
	}

	public void setCompanyname(String companyname) {
		Companyname = companyname;
	}

	public String getCompanyadress() {
		return Companyadress;
	}

	public void setCompanyadress(String companyadress) {
		Companyadress = companyadress;
	}

	public List<Employee> getEmployee() {
		return employee;
	}

	public void setEmployee(List<Employee> employee) {
		this.employee = employee;
	}

	// adding to string method
	@Override
	public String toString() {
		return "Company [id=" + id + ", Companyname=" + Companyname + ", Companyadress=" + Companyadress + ", employee="
				+ employee + "]";
	}
}