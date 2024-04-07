package com.hostheaven.backend.services.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hostheaven.backend.models.User;
import com.hostheaven.backend.repositories.implementation.UserRepository;
import com.hostheaven.backend.services.interfaces.UserServiceInterface;

@Service
public class UserService implements UserServiceInterface {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private SecurityService securityService;

	//Comprueba que el email no esté en la base dedatos, encripta la contraseña y registra al usuario
	@Override
	public String createUser(User user) {
		String response = "";
		String email = user.getEmail();
		boolean emailExists = this.emailExists(email);

		if (!emailExists) {
			String pass=user.getPassword();
			System.out.println("pass= "+pass);
			String encriptedPass=securityService.generateHash(pass);
			System.out.println("Encoded pass= "+encriptedPass);
			user.setPassword(encriptedPass);
			response = this.userRepository.createUser(user);
		} else {
			response = "El correo electrónico ya existe en la base de datos";
		}
		
		return response;
	}

	public boolean emailExists(String email) {
		boolean response = false;
		response = userRepository.verifyEmail(email);
		return response;
	}

	@Override
	public User getUserById(int id) {
		User usuario = this.userRepository.getUserById(id);
		return usuario;
	}

	@Override
	public String updateUser() {
		String mensaje = this.userRepository.updateUser();
		return mensaje;
	}

	@Override
	public String deleteUserById(int id) {
		String mensaje = this.userRepository.deleteUserById(id);
		return mensaje;
	}

	@Override
	public void changePassword(int id_user, String oldPassword, String newPassword) {
		this.userRepository.changePassword(id_user, oldPassword, newPassword);

	}

	@Override
	public boolean logIn() {
		return false;
	}

	@Override
	public boolean logOut() {
		return false;
	}

}
