package com.hostheaven.backend.repositories.implementation;

import org.springframework.stereotype.Repository;

import com.hostheaven.backend.models.User;
import com.hostheaven.backend.repositories.interfaces.UserRepositoryInterface;

@Repository
public class UserRepository implements UserRepositoryInterface {

	@Override
	public void createUser() {

	}

	@Override
	public User getUserById(int id) {
		return null;
	}

	@Override
	public String updateUser() {
		return null;
	}

	@Override
	public String deleteUserById(int id) {
		return null;
	}

	@Override
	public void changePassword(int id_user, String oldPassword, String newPassword) {
		
	}

}
