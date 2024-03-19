package com.example.demo.Dto;

public class ExpenseDto {
	public long id;
	public String productType;
	public String productName;
	public String date;
	public double price;
	public String content;
	
	public ExpenseDto() {
		super();
	}
	
	
	
	
	
	
	
	public ExpenseDto(long id, String productType, String productName, String date, double price, String content) {
		super();
		this.id = id;
		this.productType = productType;
		this.productName = productName;
		this.date = date;
		this.price = price;
		this.content = content;
	}


	public String getContent() {
		return content;
	}



	public void setContent(String content) {
		this.content = content;
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
