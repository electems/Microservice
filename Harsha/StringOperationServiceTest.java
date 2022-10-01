package com.electem.test.harsha;

import org.junit.jupiter.api.Test;

public class StringOperationServiceTest {
	@Test
	void compareTwoStrings() {
		StringOperationService stringservice = new StringOperationService();
		stringservice.compareTwoStrings("Electems", "Company");
	}

	@Test
	void removeWhiteSpace() {
		StringOperationService stringservice = new StringOperationService();
		stringservice.removeWhiteSpace("Bangalore is known as Silicon City");
	}

	@Test
	void occurenceOfCharacter() {
		StringOperationService stringservice = new StringOperationService();
		stringservice.occurenceOfCharacter("karnataka", 'a');
	}

	@Test
	void findGmailString() {
		StringOperationService stringservice = new StringOperationService();
		stringservice.findGmailString("null,a@gmail.com,b@red.com,s@gmail.com,null,c@gmail.com,d@gmail.com");
	}
}