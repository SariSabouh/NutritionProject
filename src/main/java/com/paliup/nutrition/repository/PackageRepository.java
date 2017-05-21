package com.paliup.nutrition.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.paliup.nutrition.model.Package1;


@Repository
public interface PackageRepository extends JpaRepository<Package1, Long> {
	
}
