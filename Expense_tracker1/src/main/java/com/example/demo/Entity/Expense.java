package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Expense")
public class Expense {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public long id;
	@Column
	public String productType;
	
	@Column
	public String productName;
	
	@Column
	public String date;
	
	@Column
	public double price;
	
	@Column
	public String content;
	
	public String getContent() {
		return content;
	}





	public void setContent(String content) {
		this.content = content;
	}

	public Expense(long id, String productType, String productName, String date, double price, String content) {
		super();
		this.id = id;
		this.productType = productType;
		this.productName = productName;
		this.date = date;
		this.price = price;
		this.content = content;
	}





	public Expense() {
		super();
	}

	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getProductType() {
		return productType;
	}

	public void setProductType(String productType) {
		this.productType = productType;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

}
