package com.paliup.nutrition.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "customerpackage")
public class CustomerSubscribtion implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Long id;

	@Column(name = "customer_id")
	private Long customerId;

	@Column(name = "package_id")
	private Long subscribtionId;

	public CustomerSubscribtion() {}

	public CustomerSubscribtion(CustomerSubscribtion customerSubscribtion) {
		this.id = customerSubscribtion.id;
		this.customerId = customerSubscribtion.customerId;
		this.subscribtionId = customerSubscribtion.subscribtionId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}

	public Long getSubscribtionId() {
		return subscribtionId;
	}

	public void setSubscribtionId(Long packageId) {
		this.subscribtionId = packageId;
	}

}