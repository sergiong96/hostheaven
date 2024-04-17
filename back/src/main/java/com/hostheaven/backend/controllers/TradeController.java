package com.hostheaven.backend.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hostheaven.backend.models.HostingPackage;
import com.hostheaven.backend.models.HostingPackage.hostingType;
import com.hostheaven.backend.models.Trade;
import com.hostheaven.backend.services.implementation.TradeService;

@RestController
@RequestMapping("/trades")
@CrossOrigin(origins = "http://localhost:3000") //CAMBIAR EN ENTORNO DE PRODUCCION
public class TradeController {

	@Autowired
	private TradeService tradeService;

	@PostMapping("/create")
	public void createTrade(@RequestBody Map<String, String> trade) {
		System.out.println(trade);

		/*String response=*/tradeService.createTrade(trade);

		//return "{\"response\": \"" + response + "\"}";
	}

	@GetMapping("/transaction/{id}")
	public Trade getTransaction(@PathVariable int id) {
		Trade transaction = tradeService.getTradeById(id);
		return transaction;

	}

	@GetMapping("/transaction/user/{id_user}")
	public List<Trade> getAllTransactionsByUserId(@PathVariable int id_user) {
		List<Trade> transactions = tradeService.getAllTradesByUserId(id_user);
		return transactions;

	}

	@DeleteMapping("/delete/{id}")
	public void deleteTrade(@PathVariable int id) {
		tradeService.deleteTradeById(id);
	}


}
