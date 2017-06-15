package com.paliup.nutrition.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "customercoach")
public class CustomerCoach implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Long id;

	@Column(name = "customer_id")
	private Long customerId;

	@Column(name = "caoch_id")
	private Long caochId;

	public CustomerCoach() {}

	public CustomerCoach(CustomerCoach customercoach) {
		this.customerId = customercoach.customerId;
		this.caochId = customercoach.caochId;
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

	public Long getCaochId() {
		return caochId;
	}

	public void setCaochId(Long caochId) {
		this.caochId = caochId;
	}

}