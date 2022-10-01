package com.collection;

import java.util.Arrays;
import java.util.List;

public class LaptopAccess {
	public static void main(String[] args) {

		Laptop laptop1 = new Laptop(111, "Apple", 100000.00);
		Laptop laptop2 = new Laptop(121, "HP", 80000.00);
		Laptop laptop3 = new Laptop(131, "Dell", 90000.00);

		List<Laptop> costs = Arrays.asList(laptop1, laptop2, laptop3);

		// get a Laptop with the maximum cost
		Laptop cost = costs.stream()
				.reduce(Laptop::max).get();
				

		System.out.println("Laptop with maximum cost: " + cost);
	}
}
