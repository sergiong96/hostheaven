package com.hostheaven.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.hostheaven.backend.models.User;
import com.hostheaven.backend.services.implementation.UserService;


@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000") //CAMBIAR EN ENTORNO DE PRODUCCION
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/signIn") //ok
	public String createUser(@RequestBody User user) {
		String response=userService.createUser(user);
		return response;
	}

	@PostMapping("/getUser/{id}") //ok
	public User getUserById(@PathVariable int id) {
		User usuario = userService.getUserById(id);
		return usuario;
	}

	@PostMapping("/logIn")
	public String verifyCredentials(@RequestBody String credentials ) {
		String token=userService.verifyCredentials(credentials);
		return token;
	}
	
	@PutMapping("/update/{id}")
	public String updateUser(@PathVariable int id) {
		String mensaje = userService.updateUser();
		return mensaje;
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteUser(@PathVariable int id) {
		userService.deleteUserById(id);
	}
}
