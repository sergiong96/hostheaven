package com.hostheaven.backend.services.interfaces;

import java.util.List;
import java.util.Map;

import com.hostheaven.backend.models.Trade;

public interface TradeServiceInterface {
	// Crea una nueva transacción
	public void createTrade(Map<String, String> trade);

	// Obtiene todos los datos de una transacción por su identificador
	public Trade getTradeById(int id);

	// Obtiene todas las transacciones realizadas por un usuario concreto
	public List<Trade> getAllTradesByUserId(int id_user);

	// Elimina una transacción según su identificador
	public void deleteTradeById(int id);
}
