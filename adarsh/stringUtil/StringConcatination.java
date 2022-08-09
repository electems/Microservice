import org.apache.commons.lang3.StringUtils;
public class StringConcatination {
	public String compareTwoStrings(String string1, String string2){
		//to avoid null pointer exception
		if((string1 != null && string2 != null)) {
			//validation of two stringhs
			if(StringUtils.compareIgnoreCase(string1,string2) > 0){
				return string1;
			} else {
				return "empty";
			}
		} else {
			return "Please enter both strings";
		}
	}
	public int occurrenceOfCharacter(String string1, char c) {
		//splitting the string
		 String a[] = string1.split(" ");
		 int count = 0;
		 //looping the string to get count
		    for (int i = 0; i < a.length; i++) {
		    	//validation of string 
		    	if (string1 .equals(a[i]))
		            count++;
		    }
		    return count;
	}
	public String removeWhiteSpace(String string1){
		//removeing the space of the string
	    string1 = string1.replaceAll("\\s","");
        return string1;
	}
	public String  findGmailString (String emails){
		//spliting the stringsd with respect to comma
		String[] strArray = emails.split("[,]",0);
		//createing compareing string
		String comparestring = "gmail";
		//creating  result storeing string 
		String result="";
		//looping with respect to string elements
		for (int i = 0; strArray.length > i; i++) {
			//validation of string if there are null values
			if(!strArray[i].equals("null") && strArray[i].contains(comparestring)){
				//validating the string to aviod null values 
					if(strArray[i].contains(comparestring) &&  (i == 0 || result == "")){
						 result = strArray[i];
					} else {
						 result = result+ "," +strArray[i];
					}
				}
			}
		return result;
       }
	}


