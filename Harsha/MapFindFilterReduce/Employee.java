package com.collection;

class Employee{ 
	private final int id;
	private final String name;
	private final int age;
	private final double salary;
	public Employee(int id, String name, int age, double salary){
		this.id = id;
		this.name = name;
		
		this.age = age;
		this.salary = salary;
	} 
	public int getId(){ 
		return id; 
	}
	public String getName(){ 
		return name; 
	}
	public int getAge(){ 
		return age;
	}
	public double getSalary() {
		return salary;
	}
	
	
}