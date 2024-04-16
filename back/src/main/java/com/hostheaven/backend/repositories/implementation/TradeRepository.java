package com.hostheaven.backend.repositories.implementation;

import com.hostheaven.backend.models.Trade;
import com.hostheaven.backend.repositories.interfaces.TradeRepositoryInterface;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TradeRepository implements TradeRepositoryInterface {
	
	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public String createTrade(Trade trade) {
		String response = "";
		System.out.println("Trade a insertar: " + trade);
		Session session = null;
		Transaction transaction = null;

		try {
			session = sessionFactory.openSession();
			transaction = session.beginTransaction();
			session.persist(trade);
			transaction.commit();
			response = "La operación de inserción ha sido exitosa";
		} catch (Exception e) {
			if (transaction != null) {
				transaction.rollback();
			}
			response = "Error al insertar la transaccion: " + e.getMessage();
		} finally {
			session.close();
		}

		return response;
		
		
	}

	@Override
	public Trade getTradeById(int id) {
		return null;
	}

	@Override
	public List<Trade> getAllTradesByUserId(int id_user) {
		return null;
	}

	@Override
	public void deleteTradeById(int id) {

	}

}
