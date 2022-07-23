public class NullPointerException {
	public static void main(String[] args) {
		NullPointerException.nullPointerExceptionHandled();
		NullPointerException.nullPointerException();
	}

	// This method caught NullPointerException
	static void nullPointerException() {
		Student student = new Student();
		if (student.getName().equals("adarsh")) {
			System.out.println("name is not present ");
		} else {
			System.out.println("name is present");
		}
	}

	// NullPointerException handled in this method
	static void nullPointerExceptionHandled() {
		Student student = new Student();
		try {
			if (student.getName() != null && student.getName().equals("adarsh")) {
				System.out.println("same name");
			} else {
				System.out.println("Not Same Name");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}