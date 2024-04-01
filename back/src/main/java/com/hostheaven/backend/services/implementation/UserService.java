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

	@Override
	public void createUser() {
		this.userRepository.createUser();
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
