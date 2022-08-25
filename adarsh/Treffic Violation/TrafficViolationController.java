package com.example.postgresdemo.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.postgresdemo.service.TrafficViolationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
public class TrafficViolationController {

	@Autowired
	private TrafficViolationService violationservic;
	
	@Autowired
    @Value("${export.path}")
    public String exportPath;
	
	@Autowired
    @Value("${directory.path}")
    public String directorypath;

	protected final Logger log = LoggerFactory.getLogger(getClass());

	@PostMapping("/violationData/")
	public List<File> loadViolation() throws IOException {
		System.out.println("Path is   "+exportPath);
		log.info("Start of TrafficViolationController :: loadViolation ");
		System.out.println(exportPath);
		String[] vailotionDetails = violationservic.loadViolation(exportPath);
		//ArrayList<String> fileList  = violationservic.sortYear(vailotionDetails);
		List<File> fileList=violationservic.listOfFiles(directorypath);
		log.info("End of TrafficViolationController :: loadViolation ");
return fileList;
	}

}
