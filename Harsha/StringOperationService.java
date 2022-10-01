package com.electem.test.harsha;

import org.apache.commons.lang3.StringUtils;

public class StringOperationService {
	// This method is used compare two Strings
	public String compareTwoStrings(String string1, String string2) {
		if (string1 != null && string2 != null) {
			if (StringUtils.compareIgnoreCase(string1, string2) > 0) {
				return string1;
			} else {
				return "";
			}
		} else {
			return "";
		}
	}

	// This method is used to remove white spaces in a given String
	public String removeWhiteSpace(String string) {
		if (string != null) {
			return string = StringUtils.deleteWhitespace(string);
		} else {
			return "Please provide a sentence";
		}
	}

	// This method is used to return the occurences of a particular character
	public int occurenceOfCharacter(String word, char c) {
				int count = 0;
		for (int i = 0; i < word.length(); i++) {
			if (word.charAt(i) == c) {
				count++;
			}
		}
		return count;
	}

	// This method is used to return the email id which contains "gmail" in it
	public String findGmailString(String emails) {
		String[] strArray = emails.split("[,]", 0);
		String s2 = "gmail";
		String result = "";
		for (int i = 0; i < strArray.length; i++) {
			if (!strArray[i].equals("null") && strArray[i].contains(s2)) {
				if (strArray[i].contains(s2) && (i == 0 || result == "")) {
					result = strArray[i];
				} else {
					result = result + " ," + strArray[i];
				}
			}
		}
		return result;
	}
}
