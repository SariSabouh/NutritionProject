package com.paliup.nutrition.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "customermedical")
public class CustomerMedical implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Long id;

	@Column(name = "customer_id")
	private Long customerId;

	@Column(name = "medical_id")
	private Long medicalId;

	public CustomerMedical() {}

	public CustomerMedical(long medicalId, long customerId) {
		this.customerId = customerId;
		this.medicalId = medicalId;

	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long setCustomerid() {
		return customerId;
	}

	public void setCustomerid(Long userid) {
		this.customerId = userid;
	}

	public Long getMedicalid() {
		return medicalId;
	}

	public void setMedicalid(Long medicalid) {
		this.medicalId = medicalid;
	}

}
