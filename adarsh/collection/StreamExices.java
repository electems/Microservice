import java.util.Arrays;
import java.util.List;

public class StreamExices {

	public static void main(String[] args) {
		List<String> myList = Arrays.asList("a1", "a2", "a3", "a4", "b1", "b2", "c1", "c3", "c2");

		myList.stream()
			.filter(s -> s.startsWith("a"))
			.map(String::toUpperCase)
			.sorted()
			.forEach(System.out::println);

	}

}
