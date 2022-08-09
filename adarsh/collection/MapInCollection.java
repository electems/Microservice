import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

public class MapInCollection {

	public static void main(String[] args) {
		Map<Integer,String> employeeMap = new HashMap<>();
		employeeMap.put(35,"adarsh");
		employeeMap.put(40,"manoj");
		employeeMap.put(29,"sahana");
		employeeMap.put(25,"muttu");
		
		Map<Integer,String> linkedMap = new LinkedHashMap<>();
		for(Map.Entry<Integer,String> employee : employeeMap.entrySet()){
			if(employee.getKey()>30){
				linkedMap.put(employee.getKey(),employee.getValue());
			}
		}
		System.out.println("Filterd Map :" +linkedMap);
	}

}
