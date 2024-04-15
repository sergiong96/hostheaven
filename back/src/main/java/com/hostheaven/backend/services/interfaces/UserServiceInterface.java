package com.hostheaven.backend.services.interfaces;

import org.json.JSONObject;

import com.hostheaven.backend.models.User;

public interface UserServiceInterface {

	// Crea un nuevo usuario
	public String createUser(User user);

	// Verifica que no haya un correo electrónico igual en la base de datos
	public boolean emailExists(String email);
	
	// Obtiene los datos de un usuario según su identificador
	public User getUserById(int id);

	// Verifica las credenciales para iniciar sesión y devuelve el token de sesión
	public JSONObject verifyCredentials(String credentials);
	
	// Actualiza los datos de un usuario (excepto su contraseña) y devuelve un String en función de si la
	// operación ha tenido éxito o no
	public String updateUser();

	// Elimina un usuario según su identificador y devuelve un String en función de
	// si la operación ha tenido éxito o no
	public String deleteUserById(int id);
	
	// Cambia la contraseña de un usuario
	public void changePassword(int id_user, String oldPassword, String newPassword);
	

}
