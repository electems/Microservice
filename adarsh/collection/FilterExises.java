import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class FilterExises {
	   
	public static void main(String[] args) {
		List<String> list = Arrays.asList("yearly", "years", "yeast", "yellow", "blues", "astra","straa");
		System.out.println("the data in list =" +list);
		List filteredList = list.stream()
            .filter(s -> s.length() == 5)
            .filter(s -> !s.startsWith("y"))
            .filter(s -> s.contains("str"))
             .collect(Collectors.toList());
		System.out.println(filteredList);
		}
	}
