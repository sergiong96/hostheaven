package com.hostheaven.backend.repositories.implementation;

import com.hostheaven.backend.models.Transaction;
import com.hostheaven.backend.repositories.interfaces.TransactionRepositoryInterface;
import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public class TransactionRepository implements TransactionRepositoryInterface {

	@Override
	public void createTransaction() {

	}

	@Override
	public Transaction getTransactionById(int id) {
		return null;
	}

	@Override
	public List<Transaction> getAllTransactionByUserId(int id_user) {
		return null;
	}

	@Override
	public void deleteTransactionById(int id) {

	}

}
