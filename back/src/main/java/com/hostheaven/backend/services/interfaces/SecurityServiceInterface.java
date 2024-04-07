package com.hostheaven.backend.services.interfaces;

public interface SecurityServiceInterface {

	
	// Genera el hash de la contraseña
	public String generateHash(String pass);
	
	// Verifica que la contraseña ingresada sea correcta
	public String verifyPassword(String passwordInput, String passwordBD);
	
}
