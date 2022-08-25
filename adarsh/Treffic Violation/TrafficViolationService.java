package com.example.postgresdemo.service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.filefilter.TrueFileFilter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class TrafficViolationService {
	ArrayList<String> fileList = new ArrayList<>();

	protected final Logger log = LoggerFactory.getLogger(getClass());

	public String[] loadViolation(String exportPath) throws IOException {
		log.info("Start of TrafficViolationService :: loadViolation ");
		File trefficViolationfile = new File(exportPath);
		// File file = FileUtils.getFile(path);
		String trefficViolationdata = FileUtils.readFileToString(trefficViolationfile, "UTF-8");
		System.out.println(trefficViolationdata);
		String[] allTrefficViolation = trefficViolationdata.toString().split("\n");
		log.info("End of TrafficViolationService :: loadViolation ");
		return allTrefficViolation;

	}

	public ArrayList<String> sortYear(String[] allTrefficViolation) {
		log.info("Start of TrafficViolationService :: sortYear ");
		for (String aViolotion : allTrefficViolation) {
			String violationYear = aViolotion.substring(0, 4);
			System.out.println(violationYear);
			storeViolationByYear(violationYear, aViolotion);
		}
		log.info("End of TrafficViolationService :: sortYear ");
		return fileList;

	}

	public void storeViolationByYear(String violationYear, String aViolotion) {
		log.info("Start of TrafficViolationService :: StoreViolationByYear ");
		String violation = aViolotion;

		File file = new File("E:\\Shiva\\/" + violationYear + ".txt");
		if (file.exists()) {
			fileList.add(file.getPath());
			try {
				FileUtils.writeStringToFile(file, violation, true);

			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		} else {
			try {
				FileUtils.writeStringToFile(file, violation, true);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

		log.info("End of TrafficViolationService :: StoreViolationByYear ");
	}

	public List<File> listOfFiles(String directorypath) {
		log.info("Start of TrafficViolationService :: listOfFiles ");
		File source = new File(directorypath);
		List<File> files = (List<File>) FileUtils.listFiles(source, TrueFileFilter.INSTANCE, TrueFileFilter.INSTANCE);
		log.info("End of TrafficViolationService :: listOfFiles ");
		return files;

	}

}
