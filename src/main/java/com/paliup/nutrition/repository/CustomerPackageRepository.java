package com.paliup.nutrition.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.paliup.nutrition.model.CustomerPackage;

@Repository
public interface CustomerPackageRepository extends JpaRepository<CustomerPackage, Long> {
	

}
