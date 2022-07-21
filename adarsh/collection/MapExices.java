import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class MapExices {

	 public static void main(String[] args) {
		    List<String> numbers = Arrays.asList("1", "2", "3", "4", "5", "6");
		    System.out.println("original list : " + numbers);
		    List<Integer> even = numbers.stream()
		                                .map(s -> Integer.valueOf(s))
		                                .filter(number -> number % 2 == 0)
		                                .collect(Collectors.toList());
		  
		    System.out.println("processed list, only even numbers: " + even  +"\n");
		    System.out.println("___ ________ __________ ____" +"\n");
		    List<String> values = Arrays.asList("1", "2", "3", "4", "5", "6");
		    System.out.println("original list : " + values);
		    List<Integer> odd= values.stream()
		                                .map(s -> Integer.valueOf(s))
		                                .filter(number -> number % 2 != 0)
		                                .collect(Collectors.toList());
		  
		    System.out.println("processed list, only odd numbers: " +odd  +"\n" );
		    System.out.println("___ ________ __________ ____" +"\n");
		    List<String> data = Arrays.asList("1", "2", "3", "4", "5", "6");
		    System.out.println("original list : " + data);
		    List<Integer> divisibles= data.stream()
		                                .map(s -> Integer.valueOf(s))
		                                .filter(number -> number % 3 == 0)
		                                .map(number -> number * number)
		                                .collect(Collectors.toList());
		  
		    System.out.println("processed list, only divisibles numbers with there squars: " +divisibles  +"\n" );
		                         
		                              
		   }
	 
	 
		}
