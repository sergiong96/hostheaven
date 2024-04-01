package com.hostheaven.backend.repositories.interfaces;

import com.hostheaven.backend.models.Glosary;

public interface GlosaryRepositoryInterface {

	// Obtiene el nombre de un concepto y su descripción según el identificador
	public Glosary getConcept(int id);

}
