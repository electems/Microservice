package com.electem.test.harsha;

public class StringOperartionTest {
	public static void main(String[] args) {
		StringOperationService stringservice = new StringOperationService();
		System.out.println(stringservice.compareTwoStrings("Electems","Company"));
		
		System.out.println(stringservice.removeWhiteSpace("Bangalore is known as Silicon City"));
		
		System.out.println(stringservice.occurenceOfCharacter("karnataka",'a'));
		
	    System.out.println(stringservice.findGmailString("null,a@gmail.com,b@redbus.com,s@gmail.com,null,c@yahoo.com,d@gmail.com"));
	}
}
