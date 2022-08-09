
public class SubjectData {
	private   int sem, marks;
	private String name;

	public SubjectData(int sem, int marks, String name) {
		this.sem=sem;
		this.marks=marks;
		this.name=name;
	}

	public int getSem() {
		return sem;
	}

	public void setSem(int sem) {
		this.sem = sem;
	}

	public int getMarks() {
		return marks;
	}

	public void setMarks(int marks) {
		this.marks = marks;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

}
