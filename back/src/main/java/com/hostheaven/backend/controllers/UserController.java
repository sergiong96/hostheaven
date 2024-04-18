package com.hostheaven.backend.controllers;

import java.util.Map;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.hostheaven.backend.models.User;
import com.hostheaven.backend.services.implementation.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000") // CAMBIAR EN ENTORNO DE PRODUCCION
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/signIn") // ok
	public String createUser(@RequestBody User user) {
		String response = userService.createUser(user);
		return response;
	}

	@PostMapping("/getUser/{id}") // ok
	public User getUserById(@PathVariable int id) {
		User usuario = userService.getUserById(id);
		return usuario;
	}

	@PostMapping("/logIn") // ok
	public String verifyCredentials(@RequestBody String credentials) {
		JSONObject token = userService.verifyCredentials(credentials);

		return token.toString();
	}

	@PostMapping("/updateUser") // ok
	public ResponseEntity<String> updateUser(@RequestBody User user) {
		String mensaje = userService.updateUser(user);
		JSONObject responseJson = new JSONObject();
		responseJson.put("mensaje", mensaje);
		return new ResponseEntity<String>(responseJson.toString(), HttpStatus.OK);
	}

	@PostMapping("/changePassword")
	public ResponseEntity<String> changePassword(@RequestBody Map<String, String> passwordData) { //ok
		String mensaje = userService.changePassword(passwordData);
		JSONObject responseJson = new JSONObject();
		responseJson.put("mensaje", mensaje);
		return new ResponseEntity<String>(responseJson.toString(), HttpStatus.OK);
	}

	@DeleteMapping("/delete/{id}")
	public void deleteUser(@PathVariable int id) {
		userService.deleteUserById(id);
	}
}
