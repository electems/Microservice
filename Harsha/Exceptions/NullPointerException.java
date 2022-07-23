package com;

public class NullPointerException {
	public static void main(String[] args) {
		NullPointerException.nullPointerExceptionHandled();
		NullPointerException.nullPointerException();
	}

	// This method caught NullPointerException
	static void nullPointerException() {
		Student student = new Student();
		if (student.getName().equals("harsha")) {
			System.out.println("Names not ");
		} else {
			System.out.println("Not Same Name");
		}
	}

	// NullPointerException handled in this method
	static void nullPointerExceptionHandled() {
		Student student = new Student();
		try {
			if (student.getName() != null && student.getName().equals("harsha")) {
				System.out.println("Same Name");
			} else {
				System.out.println("Not Same Name");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
