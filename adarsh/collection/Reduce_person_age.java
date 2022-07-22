import java.util.Arrays;
import java.util.List;

public class Reduce_person_age {

    public static void main(String[] args)
    {
        Person p1 = new Person("Adarsh", 10);
        Person p2 = new Person("manoj", 10);
        Person p3 = new Person("Tousif", 15);
 
        List<Person> users = Arrays.asList(p1, p2, p3);
 
        // get a person with the maximum age
        Person user = users.stream()
                        .reduce(Person::max)
                        .get();
 
        System.out.println("Person with maximum age is " + user);
    }

}
