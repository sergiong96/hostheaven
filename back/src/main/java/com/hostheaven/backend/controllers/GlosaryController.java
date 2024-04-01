package com.hostheaven.backend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hostheaven.backend.models.Glosary;
import com.hostheaven.backend.services.implementation.GlosaryService;

@RestController
@RequestMapping("/glosary")
public class GlosaryController {

	private GlosaryService glosaryService;

	@GetMapping("/{id}")
	public Glosary getConcept(@PathVariable int id) {
		Glosary glosario = glosaryService.getConcept(id);
		return glosario;
	}
}
