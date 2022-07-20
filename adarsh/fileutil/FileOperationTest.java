import java.io.File;

public class FileOperationTest {

	public static void main(String[] args) {
		FileOperationService f = new FileOperationService();
		File srcFile = new File("adarsh.txt");
		f.createAndWriteFile(srcFile);
		f.appendContent();
		f.replaceWord();
		}
}
 