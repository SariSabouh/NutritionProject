package com.paliup.nutrition.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.paliup.nutrition.model.CustomerMedical;

@Repository
public interface CustomerMedicalRepository extends JpaRepository<CustomerMedical, Long> {
	

}
