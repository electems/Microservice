import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.IntStream;
public class ReduceExises {

	public static void main(String[] args) {
		// to get the longest String
		List<String> words = Arrays.asList("ABC", "my", "name",
                "is", "Adarsh");
		 Optional<String> longestString = words.stream()
                 .reduce((word1, word2)
           -> word1.length() > word2.length()
                         ? word1 : word2);
		 longestString.ifPresent(System.out::println);
		 System.out.println("____  ____ ___ __" +"\n");
		 
		// to get the combined String
		 String[] array = {"my","name","is","adarsh"};
	          
			 Optional<String> String_combine = Arrays.stream(array)
					 .reduce((str1, str2)
                             -> str1 + "-" + str2);
			 if (String_combine.isPresent()) {
		            System.out.println(String_combine.get());
		        }
			 System.out.println("____  ____ ___ __" +"\n");
			// to get the product of all numbers
			// in given range.
			  int product = IntStream.range(2, 8)
	                     .reduce((num1, num2) -> num1 * num2)
	                     .orElse(-1);
	  
	        // Displaying the product
	        System.out.println("The product is : " + product);

	}

}