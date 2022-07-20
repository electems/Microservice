package com.electem.test.harsha;

import java.io.File;
import org.junit.jupiter.api.Test;

class FileOperationServiceTest {

	@Test
	void createAndWriteFile() {
	  FileOperationService fileOperation = new FileOperationService();
	  File myfile = new File("E:\\Harsha\\harsha.txt");
	  fileOperation.createAndWriteFile(myfile);
	}

	@Test
	void appendContent() {
	  FileOperationService fileOperation = new FileOperationService();
	  fileOperation.appendContent();
	}

	@Test
	void replaceWord() {
	  FileOperationService fileOperation = new FileOperationService();
	  fileOperation.replaceWord(); 
	}
}
