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
	public String verifyPassword(String passwordInput, String passwordBD) {
		// TODO Auto-generated method stub
		return null;
	}

}
