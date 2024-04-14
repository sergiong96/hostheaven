package com.hostheaven.backend.services.interfaces;

public interface SecurityServiceInterface {

	
	// Genera el hash de la contraseña
	public String generateHash(String pass);
	
	// Verifica que la contraseña ingresada sea correcta
	public boolean verifyPassword(String passwordInput, String passwordBD);
	
	// Devuelve el token de sesión con JWT
	public String createToken(int id_user, String email);
}
