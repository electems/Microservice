import java.util.Arrays;
import java.util.List;

public class Stundent_Avarge_Marks {

	public static void main(String[] args) {
		List<Student>  avaregeMarks = Arrays.asList(new Student(1,6,80,"adarsh"),new Student(2,7,70,"manoj"));
		filterStundent_Avarge_Marks(avaregeMarks);
	}
	public static void filterStundent_Avarge_Marks(List<Student> avaregeMarks){
		Student sub = avaregeMarks.stream().filter(Name-> "adarsh".equals(Name.getName())).findAny().orElse(null);
		System.out.println(sub.getName());
	}
	}


