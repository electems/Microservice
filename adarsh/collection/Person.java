
public class Person {

    private String name;
    private Integer age;
 
    public Person(String name, Integer age)
    {
        this.name = name;
        this.age = age;
    }
 
    public Integer getAge() {
        return age;
    }
 
    // other getters and setters
 
    @Override
    public String toString() {
        return "[" + name + ", " + String.valueOf(age) + "]";
    }
 
    public static Person max(Person x, Person y) {
        return x.getAge() > y.getAge() ? x : y;
    }

}
