package com.example.postgresdemo.model;

import java.util.Date;
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
	@NotBlank(message = "adress is mandatory")
	private String adress;
	private long phno;
	private Date joioningdata;
	
	//Creating a default constructor
	public Employee() {
	}

	public Employee(long id, String name, String adress, long phno, Date joioningdata) {
		super();
		this.id = id;
		this.name = name;
		this.adress = adress;
		this.phno = phno;
		this.joioningdata = joioningdata;
	}

	// all the getter and setter methods are created for the veriables used
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

	public String getAdress() {
		return adress;
	}

	public void setAdress(String adress) {
		this.adress = adress;
	}

	public long getPhno() {
		return phno;
	}

	public void setPhno(long phno) {
		this.phno = phno;
	}

	public Date getJoioningdata() {
		return joioningdata;
	}

	public void setJoioningdata(Date joioningdata) {
		this.joioningdata = joioningdata;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", adress=" + adress + ", phno=" + phno + ", joioningdata="
				+ joioningdata + "]";
	}
}
