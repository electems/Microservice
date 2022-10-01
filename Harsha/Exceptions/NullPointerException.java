package com;

public class NullPointerException {
	public static void main(String[] args) {
		NullPointerException.nullPointerExceptionHandled();
		NullPointerException.nullPointerException();
	}

	// This method caught NullPointerException
	static  void nullPointerException() {
		Student student = new Student();
		if (student.getName().equals("harsha")) {
			System.out.println("Names are matching");
		} else {
			System.out.println("Names are not matching");
		}
	}

	// NullPointerException handled in this method
	static void nullPointerExceptionHandled() {
		Student student = new Student();
		try {
			if (student.getName() != null && student.getName().equals("harsha")) {
				System.out.println("Names are matching");
			} else {
				System.out.println("Names are not matching");
			}
		} catch (Exception e) {
			System.out.println("Exception is handled");
			e.printStackTrace();
		}
	}
}
