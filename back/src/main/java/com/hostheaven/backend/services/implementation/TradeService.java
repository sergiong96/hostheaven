package com.hostheaven.backend.services.implementation;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hostheaven.backend.models.Trade;
import com.hostheaven.backend.repositories.implementation.TradeRepository;
import com.hostheaven.backend.services.interfaces.TradeServiceInterface;

@Service
public class TradeService implements TradeServiceInterface {

	@Autowired
	private TradeRepository tradeRepository;

	@Override
	public String createTrade(Trade trade) {
		String response=this.tradeRepository.createTrade(trade);
		
		return response;
	}

	@Override
	public Trade getTradeById(int id) {
		Trade trade = this.tradeRepository.getTradeById(id);
		return trade;
	}

	@Override
	public List<Trade> getAllTradesByUserId(int id_user) {
		List<Trade> trades = this.tradeRepository.getAllTradesByUserId(id_user);
		return trades;
	}

	@Override
	public void deleteTradeById(int id) {
		this.tradeRepository.deleteTradeById(id);
	}

}
