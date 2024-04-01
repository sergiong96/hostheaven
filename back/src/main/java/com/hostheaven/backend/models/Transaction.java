package com.hostheaven.backend.models;

import java.sql.Date;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

/**
 * Entidad que representa las transacciones económicas que se realicen en la
 * web.
 */
@Table(name = "transactions")
@Entity
public class Transaction {

	// ENUM
	private enum paymentMethod {
		TARJETA_CREDITO, TARJETA_DEBITO, TRANSFERENCIA, PAYPAL, WALLET
	};

	private enum transactionState {
		PENDIENTE, COMPLETADO, CANCELADO
	}

	
	// VARIABLES
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_transaction;

	@Column(nullable = false)
	private int id_package; // (FK) Referencia al ID del paquete contratado.

	@Column(nullable = false)
	private int id_user; // (FK) Referencia al ID del usuario que realizó la transacción.

	@Column(nullable = false)
	private double amount; // Cantidad monetaria de la transacción.

	@Column(nullable = false)
	@Temporal(TemporalType.DATE)
	private Date date; // Fecha y hora de la transacción.

	@Column(nullable = false)
	@Enumerated(EnumType.STRING)
	private paymentMethod payment_method; // Método de pago seleccionado

	@Column(nullable = false)
	@Enumerated(EnumType.STRING)
	private transactionState state; // Estado de la transacción.

	
	// CONSTRUCTORES
	public Transaction() {
	}

	public Transaction(int id_transaction, int id_package, int id_user, double amount, Date date,
			paymentMethod payment_method, transactionState state) {
		super();
		this.id_transaction = id_transaction;
		this.id_package = id_package;
		this.id_user = id_user;
		this.amount = amount;
		this.date = date;
		this.payment_method = payment_method;
		this.state = state;
	}

	
	// GETTERS Y SETTERS
	public int getId_transaction() {
		return id_transaction;
	}

	public void setId_transaction(int id_transaction) {
		this.id_transaction = id_transaction;
	}

	public int getId_package() {
		return id_package;
	}

	public void setId_package(int id_package) {
		this.id_package = id_package;
	}

	public int getId_user() {
		return id_user;
	}

	public void setId_user(int id_user) {
		this.id_user = id_user;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public paymentMethod getPayment_method() {
		return payment_method;
	}

	public void setPayment_method(paymentMethod payment_method) {
		this.payment_method = payment_method;
	}

	public transactionState getState() {
		return state;
	}

	public void setState(transactionState state) {
		this.state = state;
	}

	
	// TO STRING
	@Override
	public String toString() {
		return "Transaction [id_transaction=" + id_transaction + ", id_package=" + id_package + ", id_user=" + id_user
				+ ", amount=" + amount + ", date=" + date + ", payment_method=" + payment_method + ", state=" + state
				+ "]";
	}

}
