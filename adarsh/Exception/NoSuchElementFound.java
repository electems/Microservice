
import java.util.HashSet;
import java.util.Hashtable;
import java.util.Set;

public class NoSuchElementFound {
	
	static void noSuchElementFoundHandled() {
		Set<String> set = new HashSet<String>();
		Hashtable<Integer, String> hashtable = new Hashtable<Integer, String>();
		hashtable.put(1, "adarsh");
		hashtable.put(2, "manoj");
		hashtable.put(3, "mamatha");
		// commands that throw exception.
		// set.iterator().next();
		hashtable.elements().nextElement();
		System.out.println(hashtable.elements().nextElement());
	}
	
	static void noSuchElementFound() {
		Set set = new HashSet();
		Hashtable<Integer, String> hshTble = new Hashtable<Integer, String>();
		hshTble.elements().nextElement();
		System.out.println(hshTble.elements().nextElement());

	}
}