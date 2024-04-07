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
	public String createUser(User user) {
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

	public boolean verifyEmail(String email) {
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
