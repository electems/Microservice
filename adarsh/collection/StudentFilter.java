import java.util.Arrays;
import java.util.List;

public class StudentFilter {

	public static void main(String[] args){
		List<Subject>  subList = Arrays.asList(new Subject(1, "Kannada"), 
				new Subject(2, "Kannada"), new Subject(3, "Hindi"));
		
		filterSubject(subList);
	}
	public static void filterSubject(List<Subject> subList){
		Subject sub = subList.stream().filter(name->"Kannada".equals(name.getName())).findAny().orElse(null);
		System.out.println(sub.getName());
	}
}
