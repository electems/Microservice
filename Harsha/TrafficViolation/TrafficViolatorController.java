package com.example.onetoonemapping.controller;

import java.io.IOException;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.onetoonemapping.service.TrafficViolatorServiceClass;

@RestController
public class TrafficViolatorController {

	@Autowired
	private TrafficViolatorServiceClass trafficViolatorServiceClass;

	@PostMapping("/trafficVoilation")
	public void create(@Valid @RequestBody String path) throws IOException {
		String[] voilationArray = trafficViolatorServiceClass.loadVoilations(path);
		trafficViolatorServiceClass.sortDate(voilationArray);
	}
}