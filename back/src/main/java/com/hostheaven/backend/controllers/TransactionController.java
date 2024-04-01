package com.hostheaven.backend.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.hostheaven.backend.models.Transaction;
import com.hostheaven.backend.services.implementation.TransactionService;

@RestController
@RequestMapping("/transactions")
public class TransactionController {

	@Autowired
	private TransactionService transactionService;

	@PutMapping("/create")
	public void createTransaction() {
		transactionService.createTransaction();
	}

	@GetMapping("/transaction/{id}")
	public Transaction getTransaction(@PathVariable int id) {
		Transaction transaction = transactionService.getTransactionById(id);
		return transaction;

	}

	@GetMapping("/transaction/user/{id_user}")
	public List<Transaction> getAllTransactionsByUserId(@PathVariable int id_user) {
		List<Transaction> transactions = transactionService.getAllTransactionByUserId(id_user);
		return transactions;

	}

	@DeleteMapping("/delete/{id}")
	public void deleteTransaction(@PathVariable int id) {
		transactionService.deleteTransactionById(id);
	}


}
