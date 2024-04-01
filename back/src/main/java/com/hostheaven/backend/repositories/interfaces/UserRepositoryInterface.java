package com.hostheaven.backend.repositories.interfaces;

import com.hostheaven.backend.models.User;

public interface UserRepositoryInterface {

	// Crea un nuevo usuario
	public void createUser();

	// Obtiene los datos de un usuario según su identificador
	public User getUserById(int id);

	// Actualiza los datos de un usuario y devuelve un String en función de si la operación ha tenido éxito o no
	public String updateUser();

	// Elimina un usuario según su identificador y devuelve un String en función de si la operación ha tenido éxito o no
	public String deleteUserById(int id);

	// Cambia la contraseña de un usuario
	public void changePassword(int id_user, String oldPassword, String newPassword);
}
