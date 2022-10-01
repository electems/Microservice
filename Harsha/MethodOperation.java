package com.collection;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.OptionalInt;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class MethodOperation {

	//Using stream method to calculate sum of numbers
	public static void sumOfNumbers() {
		int myArray[] = { 1, 5, 8 };
		int sum = Arrays.stream(myArray).sum();
		System.out.println("Sum of numbers: "+sum);
		System.out.println("----------------");
	}

	//map method is used to convert strings into UpperCase
	public static void toUpperCase() {
		String[] myArray = new String[]{"bob", "alice", "paul", "ellie"};
		Stream<String> myStream = Arrays.stream(myArray);
		Stream<String> myNewStream = myStream.map(s -> s.toUpperCase());
		String[] myNewArray =myNewStream.toArray(String[]::new);
		System.out.println("Conversion to UpperCase using Map method--> ");
		for(String s:myNewArray) {
			System.out.println(s);
		}
		System.out.println("----------------");
	}

	//Using Reduce method concating the string
	public static void concatString() {
		String[] myArray = { "this", "is", "a", "","sentence" };
		String result = Arrays.stream(myArray)
				.reduce("", (a,b) -> a + b);
		System.out.println("Concating the string using Reduce method: "+result);
		System.out.println("------------");
	}

	//Using Filter method printing string length() > 4
	public static void length() {
		String[] myArray = new String[]{"bob", "alice", "paul", "ellie"};
		Stream<String> string = Arrays.stream(myArray);
		Stream<String>  cond= string.filter(s -> s.length() > 3);
		String[] newArray=cond.toArray(String[]::new);
		System.out.println("Strings length greater than 3 using Filter method--> ");
		for(String s:newArray) {
			System.out.println(s);
		}
		System.out.println("----------------");
	}

	// using Find method some operations done
	public static void operationsOnFindMethod() {
		//To find number > 1
		List<Integer> list = Arrays.asList(1, 2, 5, 3, 2, 1);
		Optional<Integer> first2 = list.stream()
				.filter(x -> x >1 ).findFirst();
		if (first2.isPresent()) {
			System.out.println(first2.get()); 
		} else {
			System.out.println("no value?");
		}
		//to find even number
		IntStream stream = IntStream.of(1, 5, 8, 1, 12, 16);
		stream = stream.filter(i -> i % 2 == 0);
		OptionalInt value = stream.findAny();
		if (value.isPresent()) 
		{
			System.out.println(value.getAsInt());
		}
		System.out.println("----------------");
	}

	//Using  Filter and Find method in 1 operation
	public static void filterAndfind() {
		List<String> list = Arrays.asList("node", "java", "python", "ruby");
		Optional<String> string = list.stream()
				.filter(x -> !x.contains("node"))
				.findFirst();
		if (string.isPresent()) {
			System.out.println(string.get()); 
		} else {
			System.out.println("no value?");
		}
		System.out.println("----------------");
	}

	//Using Map and Filter method
	public static void mapAndFilter() {
		List<String> numbers = Arrays.asList("9", "22", "82", "17", "27", "6");
		System.out.println("original list: " + numbers);

		List<Integer> even = numbers.stream()
				.map(s -> Integer.valueOf(s))
				.filter(number -> number % 2 == 0)
				.collect(Collectors.toList());

		System.out.println("processed list, only even numbers: " + even);
	}
}

