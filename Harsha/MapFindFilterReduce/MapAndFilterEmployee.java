package com.collection;

import java.util.ArrayList; 
import java.util.List; 


public class MapAndFilterEmployee { 
	public static void main(String args[]) { 
		List<Employee> peoples = new ArrayList<>();
		peoples.add(new Employee(101, "Victor", 23,15000.0));
		peoples.add(new Employee(102, "Jack", 30,23000.00));
		peoples.add(new Employee(103, "Sam", 22,18244.00));
		peoples.add(new Employee(104, "John", 21,14000.00));
		peoples.add(new Employee(105, "Roman", 24,21000.00));
		double average = average(peoples);
		System.out.println("Average age of employees are : " + average);
	} 

	// Java method which uses map  to calculate average of list of  employees.
	// @return average age of given list of Employees 
	private static double average(List<? extends Employee> peoples){
		return peoples.stream().filter(p -> p.getName().endsWith("n"))
				.mapToDouble(p-> p.getSalary()) .average() .getAsDouble();
	}
} 



