package com.hostheaven.backend.services.implementation;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hostheaven.backend.models.Transaction;
import com.hostheaven.backend.repositories.implementation.TransactionRepository;
import com.hostheaven.backend.services.interfaces.TransactionServiceInterface;

@Service
public class TransactionService implements TransactionServiceInterface {

	@Autowired
	private TransactionRepository transactionRepository;

	@Override
	public void createTransaction() {
		this.transactionRepository.createTransaction();
	}

	@Override
	public Transaction getTransactionById(int id) {
		Transaction transaction = this.transactionRepository.getTransactionById(id);
		return transaction;
	}

	@Override
	public List<Transaction> getAllTransactionByUserId(int id_user) {
		List<Transaction> transactions = this.transactionRepository.getAllTransactionByUserId(id_user);
		return transactions;
	}

	@Override
	public void deleteTransactionById(int id) {
		this.transactionRepository.deleteTransactionById(id);
	}

}
