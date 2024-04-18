package com.hostheaven.backend.services.implementation;

import java.lang.reflect.Field;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hostheaven.backend.models.HostingPackage;
import com.hostheaven.backend.models.HostingPackage.hostingType;
import com.hostheaven.backend.models.Trade;
import com.hostheaven.backend.models.Trade.paymentMethod;
import com.hostheaven.backend.models.Trade.tradeState;
import com.hostheaven.backend.repositories.implementation.HostingPackageRepository;
import com.hostheaven.backend.repositories.implementation.TradeRepository;
import com.hostheaven.backend.services.interfaces.TradeServiceInterface;

@Service
public class TradeService implements TradeServiceInterface {

	@Autowired
	private TradeRepository tradeRepository;
	
	@Autowired
	private HostingPackageService hostingPackageService;

	@Override
	public String createTrade(Map<String, String> trade) throws ParseException {

		//Capturar la propiedad custom que podria venir en el trade si es personalizado (es un Map con todas las propiedades) ok
		//Si es personalizado, capturar todas las propiedades necesarias para insertar un nuevo hostingPackage ok
		//Si es estandar, pasar directamente a createTrade, creando un objeto trade a raiz del Map
		//Despues, con el id que devuelva insertCustomPackage debo crear un objeto trade con las propiedades necesarias del Object + el id
		String response="";
		Trade tradeObj=new Trade();
		tradeObj.setId_user(Integer.parseInt(trade.get("id_user")));
		tradeObj.setAmount(Double.parseDouble(trade.get("package_price")));
		
		Date date_start_parsed=new SimpleDateFormat("yyy-MM-dd").parse(trade.get("date_start"));
		tradeObj.setDate_start(date_start_parsed);
		
		Date date_end_parsed=new SimpleDateFormat("yyy-MM-dd").parse(trade.get("date_end"));
		tradeObj.setDate_end(date_end_parsed);

		paymentMethod paymentParsed=paymentMethod.valueOf(trade.get("type"));
		tradeObj.setPayment_method(paymentParsed);

		tradeState stateParsed=tradeState .valueOf(trade.get("state"));
		tradeObj.setState(stateParsed);
		//Añadirle todas las propiedades del Map trade que necesita
		if(Boolean.parseBoolean((String)trade.get("custom"))==true){
			HostingPackage hostingPackage=new HostingPackage();
			hostingPackage.setApp_installation(Boolean.parseBoolean((String)trade.get("app_installation")));
			hostingPackage.setCdn(Boolean.parseBoolean((String)trade.get("cdn")));
			hostingPackage.setCustom(Boolean.parseBoolean((String)trade.get("custom")));
			hostingPackage.setDatabases(Integer.parseInt(trade.get("databases")));
			hostingPackage.setDomains(Integer.parseInt(trade.get("domains")));
			hostingPackage.setEmail_account(Integer.parseInt(trade.get("email_account")));
			hostingPackage.setFtp_server(Boolean.parseBoolean((String)trade.get("ftp_server")));
			hostingType hostingTypeParsed=hostingType.valueOf(trade.get("hosting_type"));
			hostingPackage.setHosting_type(hostingTypeParsed);
			hostingPackage.setMigration(Boolean.parseBoolean((String)trade.get("cdn")));
			hostingPackage.setMonthly_bandwidth(Integer.parseInt(trade.get("monthly_bandwidth")));
			hostingPackage.setPackage_name((String)trade.get("package_name"));
			hostingPackage.setPackage_price(Double.parseDouble((String)trade.get("package_price")));
			hostingPackage.setPurchase_quantity(Integer.parseInt(trade.get("purchase_quantity")));
			hostingPackage.setSsl(Boolean.parseBoolean((String)trade.get("ssl")));
			hostingPackage.setStorage(Integer.parseInt(trade.get("storage")));
			hostingPackage.setTechnical_support_24h(Boolean.parseBoolean((String)trade.get("technical_support_24h")));
			
			int id_package=this.insertCustomPackage(hostingPackage);
			tradeObj.setId_package(id_package);
			//Tendria que añadir al objeto tradeObj esa propiedadid_package que acaba de llegar y todas las demas propiedades que necesita del Map trade
			response=this.tradeRepository.createTrade(tradeObj);
			System.out.println(hostingPackage);
		}else {
			//Se añadiria directamente el trade creado arriba
			tradeObj.setId_package(Integer.parseInt(trade.get("id_package")));
			response=this.tradeRepository.createTrade(tradeObj);
		}


		return response;
	}

	// Si llega un contrato de un paquete custom, antes debe insertarse en la tabla HostingPackage 
	// y este metodo devolvera el id de ese paquete custom recien añadido
	public int insertCustomPackage(HostingPackage hostingPackage) {
		int id_package=hostingPackageService.createHostingPackage(hostingPackage);
		return id_package;
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
