package com.hostheaven.backend.services.implementation;

import org.springframework.stereotype.Service;

import com.hostheaven.backend.models.Glosary;
import com.hostheaven.backend.repositories.implementation.GlosaryRepository;
import com.hostheaven.backend.services.interfaces.GlosaryServiceInterface;

@Service
public class GlosaryService implements GlosaryServiceInterface {

	private GlosaryRepository glosaryRepository;

	@Override
	public Glosary getConcept(int id) {
		Glosary concepto = glosaryRepository.getConcept(id);
		return concepto;
	}

}
