package com.hostheaven.backend.repositories.implementation;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.hostheaven.backend.models.User;
import com.hostheaven.backend.repositories.interfaces.UserRepositoryInterface;

@Repository
public class UserRepository implements UserRepositoryInterface {

	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public String createUser(User user) { // ok
		String response = "";
		System.out.println("Usuario a insertar: " + user);
		Session session = null;
		Transaction transaction = null;

		try {
			session = sessionFactory.openSession();
			transaction = session.beginTransaction();
			session.persist(user);
			transaction.commit();
			response = "La operación de inserción ha sido exitosa";
		} catch (Exception e) {
			if (transaction != null) {
				transaction.rollback();
			}
			response = "Error al insertar el usuario: " + e.getMessage();
		} finally {
			session.close();
		}

		return response;

	}

	public boolean verifyEmail(String email) { // ok
		boolean emailExists = false;
		String response = "";

		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();

		String hql = "SELECT id_user FROM User WHERE email=:email";
		Query<String> query = session.createQuery(hql, String.class);
		query.setParameter("email", email);

		response = query.uniqueResult();

		if (response != null) {
			emailExists = true;
		}

		transaction.commit();
		session.close();

		return emailExists;
	}

	@Override
	public User getUserById(int id) { // ok
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();

		String hql = "FROM User WHERE id_user=:id_user";
		Query<User> query = session.createQuery(hql, User.class);
		query.setParameter("id_user", id);
		User usuario = query.uniqueResult();

		transaction.commit();
		session.close();

		return usuario;
	}

	@Override
	public User getUserDataByEmail(String email) {

		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();

		String hql = "FROM User WHERE email=:email";
		Query<User> query = session.createQuery(hql, User.class);
		query.setParameter("email", email);
		User data = query.uniqueResult();

		transaction.commit();
		session.close();

		return data;
	}

	@Override
	public String updateUser(User userData) { // ok

		Session session = null;
		Transaction transaction = null;
		String response = "";

		try {
			User usuario = this.getUserById(userData.getId_user());
			if (usuario != null) {
				usuario.setName(userData.getName());
				usuario.setEmail(userData.getEmail());
				usuario.setSurname(userData.getSurname());
				session = sessionFactory.openSession();
				transaction = session.beginTransaction();

				session.merge(usuario);

				transaction.commit();

				response = "Actualizacion realizada con exito";
			} else {
				response = "Usuario no encontrado";
			}

		} catch (Exception e) {
			response = "Error al actualizar: " + e.getMessage();
			if (transaction != null) {
				transaction.rollback();
			}
		} finally {
			if (session != null) {
				session.close();
			}
		}

		return response;
	}

	@Override
	public String changePassword(User user, String newPassword) { //ok
		Session session = null;
		Transaction transaction = null;
		String response = "";

		try {
			session = sessionFactory.openSession();
			transaction = session.beginTransaction();

			user.setPassword(newPassword);
			session.merge(user);

			transaction.commit();

			response = "Contraseña actualizada con exito";

		} catch (Exception e) {

			response = "Error al actualizar: " + e.getMessage();
			if (transaction != null) {
				transaction.rollback();
			}
		} finally {
			if (session != null) {
				session.close();
			}

		}

		return response;
	}

	@Override
	public String deleteUserById(int id) {
		return null;
	}

}
