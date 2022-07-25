package com.electem.test.harsha;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

import org.apache.commons.io.FileUtils;

public class FileOperationService {
	// This method is used to create file and write the string to that file
	public void createAndWriteFile(File file) {
		try {
			// touch() method will create a file
			FileUtils.touch(file);
			// writeStringToFile() method is used to write in a file.
			FileUtils.writeStringToFile(file, "This is a programming test for java developer", "UTF-8", true);
			System.out.println("For createAndWritefile method: File is created and wrote a content in a file");
		} catch (IOException e) {
			System.out.println("Caught FileNotFoundException: "+ e.getMessage());
		}
		System.out.println("---------------------------");
	}

	// This method is used copy file and append content to that file
	public void appendContent() {
		try {
			File srcFile = new File("E:\\Harsha\\harsha.txt");
			File destDir = new File("E:\\BMS\\");
			// copyFileToDirectory() method is used to copy to another folder
			FileUtils.copyFileToDirectory(srcFile, destDir);
			File destDirToAppend = new File("E:\\BMS\\" + srcFile.getName());
			FileUtils.writeStringToFile(destDirToAppend, "\tSoftware Developer", "UTF-8", true);
			System.out.println("\nFor appendContent method:");
			System.out.println("Copied the file and appended the content");
		} catch (Exception e) {
			System.out.println("Caught FileNotFoundException: "+ e.getMessage());
		}
		System.out.println("---------------------------");
	}

	// This method is used to copy from existing directory to another folder and
	// Check the contents of two files in that directory,if same delete the
	// directory
	public void replaceWord() {
		File srcFile = new File("E:\\Test\\FileUtil\\harsha.txt");
		File destDir = new File("E:\\Test\\FileUtilReplace");
		try {
			// copyFileToDirectory() method is used to copy to another folder
			FileUtils.copyFileToDirectory(srcFile, destDir);
			File firstFile = new File("E:\\Test\\FileUtilReplace\\harsha.txt");
			File secondFile = new File("E:\\Test\\FileUtilReplace\\adarsha.txt");
			String contentOfFirstFile = null;
			String contentOfSecondFile = null;
			// readFileToString() method is used to read the file
			contentOfFirstFile = FileUtils.readFileToString(firstFile, StandardCharsets.UTF_8);
			contentOfSecondFile = FileUtils.readFileToString(secondFile, StandardCharsets.UTF_8);
			System.out.println("\nFor replaceWord method:");
			System.out.println("Data present in First File: " + contentOfFirstFile);
			System.out.println("Data present in Second File: " + contentOfSecondFile);
			if (contentOfFirstFile.equals(contentOfSecondFile)) {
				secondFile.delete();
				System.out.println("\nBoth files having same content, so the files are deleted");
			} else {
				System.out.println("\nBoth files don't have same content");
			}
		} catch (IOException e) {
			System.out.println("Caught FileNotFoundException: "+ e.getMessage());
		}
	}
}