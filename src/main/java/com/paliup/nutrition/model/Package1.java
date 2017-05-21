package com.paliup.nutrition.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "package")
public class Package1 implements Serializable {  // because package keyword is reserved
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "package_id")
	private Long id;
	
	@Column(name = "name")
	private String name;
	
	public Package1(){}
	
	public Package1(Package1 package1){
		this.id = package1.id;
		this.name = package1.name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}