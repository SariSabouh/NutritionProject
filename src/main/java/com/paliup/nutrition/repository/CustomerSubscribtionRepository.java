package com.paliup.nutrition.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.paliup.nutrition.model.CustomerSubscribtion;

@Repository
public interface CustomerSubscribtionRepository extends JpaRepository<CustomerSubscribtion, Long> {

}
