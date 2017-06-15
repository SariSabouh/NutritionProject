package com.paliup.nutrition.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "medicalhistory")
public class Medical implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "MedicalId")
	private Long id;

	@Column(name = "name")
	private String nameOfMedical;

	public Medical() {}

	public Medical(String nameOfMedical) {
		this.nameOfMedical = nameOfMedical;
	}

	public Medical(Medical medical) {
		this.id = medical.id;
		this.nameOfMedical = medical.nameOfMedical;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNameOfMedical() {
		return nameOfMedical;
	}

	public void setNameOfMedical(String nameOfMedical) {
		this.nameOfMedical = nameOfMedical;
	}

}
