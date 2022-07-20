package com.electem.test.harsha;

import java.io.File;

public class FileOperationTest {
public static void main(String[] args)  {
	FileOperationService fileOperation = new FileOperationService();
	File myfile = new File("E:\\Harsha\\harsha.txt");
	fileOperation.createAndWriteFile(myfile);
	fileOperation.appendContent();
	fileOperation.replaceWord();
   }
}
