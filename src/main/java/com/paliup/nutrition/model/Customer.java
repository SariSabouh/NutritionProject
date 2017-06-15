package com.paliup.nutrition.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "customer")
public class Customer implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "customer_id")
	private Long Id;

	@Column(name = "user_id")
	private Long userId;

	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;

	@Column(name = "date_of_birth")
	private String dateOfBirth;

	@Column(name = "phone")
	private long phone;

	@Column(name = "trial")
	private int trial;

	@Column(name = "blocked")
	private int blocked;

	@Column(name = "date_account_created")
	private String dateAccountCreated;

	@Column(name = "height")
	private double height;

	@Column(name = "weight")
	private double weight;

	public Customer(String firstName) {
		this.firstName = firstName;
	}

	public Customer(Customer customer) {
		this.Id = customer.Id;
		this.userId = customer.userId;
		this.firstName = customer.firstName;
		this.lastName = customer.lastName;
		this.dateOfBirth = customer.dateOfBirth;
		this.height = customer.height;
		this.weight = customer.weight;
		this.blocked = customer.blocked;
		this.phone = customer.phone;
		this.dateAccountCreated = customer.dateAccountCreated;
		this.trial = customer.trial;

	}

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public long getPhone() {
		return phone;
	}

	public void setPhone(long phone) {
		this.phone = phone;
	}

	public int getTrial() {
		return trial;
	}

	public void setTrial(int trial) {
		this.trial = trial;
	}

	public int getBlocked() {
		return blocked;
	}

	public void setBlocked(int blocked) {
		this.blocked = blocked;
	}

	public String getDateAccountCreated() {
		return dateAccountCreated;
	}

	public void setDateAccountCreated(String dateAccountCreated) {
		this.dateAccountCreated = dateAccountCreated;
	}

	public double getHeight() {
		return height;
	}

	public void setHeight(double height) {
		this.height = height;
	}

	public double getWeight() {
		return weight;
	}

	public void setWeight(double weight) {
		this.weight = weight;
	}

}
