package com.hostheaven.backend.repositories.implementation;

import org.springframework.stereotype.Repository;

import com.hostheaven.backend.models.Glosary;
import com.hostheaven.backend.repositories.interfaces.GlosaryRepositoryInterface;

@Repository
public class GlosaryRepository implements GlosaryRepositoryInterface {


	@Override
	public Glosary getConcept(int id) {
		return null;
	}

}
