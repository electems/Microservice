import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

public class MapUseingFilters {

	public static void main(String[] args) {
		Map<Integer,String> employeeMap = new HashMap<>();
		employeeMap.put(35,"adarsh");
		employeeMap.put(40,"manoj");
		employeeMap.put(29,"sahana");
		employeeMap.put(25,"muttu");
		Map<Integer,String> filtermap = employeeMap.entrySet().stream().filter(x->x.getKey()<30)
				.collect(Collectors.toMap(Map.Entry::getKey,Map.Entry::getValue));
		
		System.out.println("Filtered Map :" +filtermap);
	}

}
