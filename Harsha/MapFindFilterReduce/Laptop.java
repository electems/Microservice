package com.collection;

public class Laptop {
	private int id;
	private String brand;
	private double cost;

	public Laptop(int id, String brand, double cost) {
		super();
		this.id = id;
		this.brand = brand;
		this.cost = cost;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public double getCost() {
		return cost;
	}
	public void setCost(double cost) {
		this.cost = cost;
	}
	
	@Override
	public String toString() {
		return "\n Id: "+id+"\n Brand: "+brand+"\n Cost: "+cost;
	}
	public static Laptop max(Laptop x, Laptop y) {
		return x.getCost() > y.getCost() ? x : y;
	}
}
