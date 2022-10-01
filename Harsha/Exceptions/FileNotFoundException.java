package com;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class FileNotFoundException {
	// FileNotFoundException handled in this method
	static void fileNotFoundExceptionHandled() {
		// creating an instance of the FileReader class
		FileReader fileReader;
		try {
			fileReader = new FileReader("Test.txt");
			BufferedReader bufferReader = new BufferedReader(fileReader);
			// declaring an empty string by passing null value
			String fileData = null;
			// while loop to read and print data from buffered reader
			try {
				while ((fileData = bufferReader.readLine()) != null) {
					System.out.println(fileData);
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		} catch (Exception e1) {
			e1.printStackTrace();
		}
	}

	// This method caught FileNotFoundException
	static void fileNotFoundException() {
		FileReader fileReader;
		try {
			fileReader = new FileReader("E:\\Harsha\\Test.txt");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}