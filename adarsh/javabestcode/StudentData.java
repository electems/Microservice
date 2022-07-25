
public class StudentData {
	private int roolnumber, semister;
	private long phon_number;
	private String Student_Name;

	public StudentData(int roolnumber, int semister, long phon_number, String Student_Name) {
		this.roolnumber = roolnumber;
		this.semister = semister;
		this.phon_number = phon_number;
		this.Student_Name = Student_Name;

	}

	public int getRoolnumber() {
		return roolnumber;
	}

	public void setRoolnumber(int roolnumber) {
		this.roolnumber = roolnumber;
	}

	public int getSemister() {
		return semister;
	}

	public void setSemister(int semister) {
		this.semister = semister;
	}

	public long getPhon_number() {
		return phon_number;
	}

	public void setPhon_number(long phon_number) {
		this.phon_number = phon_number;
	}

	public String getStudent_Name() {
		return Student_Name;
	}

	public void setStudent_Name(String student_Name)
{
		Student_Name = student_Name;
	}
}
