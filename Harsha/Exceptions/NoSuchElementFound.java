package com;

import java.util.Hashtable;

public class NoSuchElementFound {

	// NoSuchElementException handled in this method
	static void noSuchElementFoundHandled() {
		Hashtable<Integer, String> hashtable = new Hashtable<Integer, String>();
		hashtable.put(1, "John");
		hashtable.put(2, "James");
		hashtable.put(3, "Smith");
		// set.iterator().next();
		System.out.println(hashtable.elements().nextElement());

	}

	// This method caught NoSuchElementException
	static void noSuchElementFound() {
		Hashtable<Integer, String> hashtable = new Hashtable<Integer, String>();
		// commands that throw exception.
		System.out.println(hashtable.elements().nextElement());
	}
}