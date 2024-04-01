package com.hostheaven.backend.services.interfaces;

import java.util.List;

import com.hostheaven.backend.models.Transaction;

public interface TransactionServiceInterface {
	// Crea una nueva transacción
	public void createTransaction();

	// Obtiene todos los datos de una transacción por su identificador
	public Transaction getTransactionById(int id);

	// Obtiene todas las transacciones realizadas por un usuario concreto
	public List<Transaction> getAllTransactionByUserId(int id_user);

	// Elimina una transacción según su identificador
	public void deleteTransactionById(int id);
}
