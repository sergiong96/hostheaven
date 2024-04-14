package com.hostheaven.backend.services.implementation;

import com.hostheaven.backend.services.interfaces.SecurityServiceInterface;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class SecurityService implements SecurityServiceInterface {

	@Override
	public String generateHash(String password) {
		String encodedPass = "";

		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		encodedPass = encoder.encode(password);

		return encodedPass;
	}

	@Override
	public boolean verifyPassword(String passwordInput, String passwordBD) {
		
		BCryptPasswordEncoder verifier=new BCryptPasswordEncoder();
		
		boolean match=verifier.matches(passwordInput, passwordBD);
		
		return match;
	}
	
	
	
	@Override
	public String createToken(int id_user, String email) {
		String token="";
		
		//SEGUIR POR AQUI, CREAR EL TOKEN CON EL ID Y EL EMAIL DE USUARIO CODIFICADOS
		return token;
	}

}
