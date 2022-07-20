import org.junit.Test;

public class StringConcatinationTest {

	@Test
	public void testcompareTwoStrings() {
		StringConcatination stringConcatination1= new StringConcatination();
		stringConcatination1.compareTwoStrings("Shivu", "bhanage");
	}
	
	@Test
	public void testoccurrenceOfCharacte() {
		StringConcatination stringConcatination1= new StringConcatination();
		stringConcatination1.occurrenceOfCharacter("Adarsh", 'd');
	}
	@Test
	public void testremoveWhiteSpace() {
		StringConcatination stringConcatination1= new StringConcatination();
		stringConcatination1.removeWhiteSpace("A d a r s h");
	}
	@Test
	public void testfindGmailString() {
		StringConcatination stringConcatination1= new StringConcatination();
		stringConcatination1.findGmailString("A@gmail,d@gmail,a@gmails");
	}

}
	