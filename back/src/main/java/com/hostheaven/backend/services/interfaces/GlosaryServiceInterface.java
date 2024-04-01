package com.hostheaven.backend.services.interfaces;

import com.hostheaven.backend.models.Glosary;

public interface GlosaryServiceInterface {

	// Obtiene el nombre de un concepto y su descripción según el identificador
	public Glosary getConcept(int id);
	
}
