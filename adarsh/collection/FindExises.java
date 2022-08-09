import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public class FindExises {

	public static void main(String[] args) {
		 List<String> list = Arrays.asList("adarsh", "java", "python", "ruby","javaa");

	        Optional<String> result = list.stream()
	        		.filter(s -> s.length() == 5)
	        		.filter(s -> !s.startsWith("a"))
	                .filter(x -> !x.equalsIgnoreCase("j"))
	                .findFirst();

	        if (result.isPresent()) {
	            System.out.println(result.get()); 
	        } else {
	            System.out.println("no value?");
	        }
	        System.out.println("____   ______   __  ___" +"\n");
	        
	        
	        List<String> value = Arrays.asList("adarsh", "java", "python", "ruby","javaa","raaaa");

	        Optional<String> data = value.stream()
	        		.filter(s -> s.length() == 5)
	        		.filter(s -> !s.startsWith("j"))
	                .filter(x -> !x.equalsIgnoreCase("r"))
	                .findAny();

	        if (data.isPresent()) {
	            System.out.println(data.get()); 
	        } else {
	            System.out.println("no value?");
	        }


	}

}
