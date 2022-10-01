package com.example.onetoonemapping.service;

import java.io.File;
import java.io.IOException;
import org.apache.commons.io.FileUtils;
import org.springframework.stereotype.Component;

@Component
public class TrafficViolatorServiceClass {

	// method used to read file and return String[]
	public String[] loadVoilations(String filepath) throws IOException {
		File file = FileUtils.getFile(filepath);
		String data = FileUtils.readFileToString(file, "UTF-8");
		String[] textByLine = data.toString().split("\n");
		return textByLine;
	}

	// method used to sort based on year
	public void sortDate(String[] allVoilations) throws IOException {
		for (String aVoilation : allVoilations) {
			String year = aVoilation.substring(0, 4);
			storeViolationByYear(year, aVoilation);
		}
	}

	// method used to check whether file exists or not,if exists write a voilation
	// else create new file and write a voilation
	public void storeViolationByYear(String voilationYear, String voilation) {
		File file = new File("E:\\BMS\\/" + voilationYear + ".txt");
		try {
			if (file.exists()) {
				FileUtils.writeStringToFile(file, voilation, true);
			} else {
				file.createNewFile();
				FileUtils.writeStringToFile(file, voilation, true);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
