import static org.junit.Assert.*;

import java.io.File;

import org.junit.Test;

public class FileOperationServiceTest {

	@Test
	public void testcreateAndWriteFile() {
		FileOperationService fileoperatin = new FileOperationService();
		File srcFile = new File("adarsh.txt");
		fileoperatin.createAndWriteFile(srcFile);
	}
	@Test
	public void testappendContent() {
		FileOperationService fileoperatin = new FileOperationService();
		fileoperatin.appendContent();
	}
	@Test
	public void testreplaceWord() {
		FileOperationService fileoperatin = new FileOperationService();
		fileoperatin.replaceWord();
	}

}
