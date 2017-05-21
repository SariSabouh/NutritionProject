package com.paliup.nutrition.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.paliup.nutrition.model.Medical;


@Repository
public interface MedicalRepository extends JpaRepository<Medical, Long> {
	

}
