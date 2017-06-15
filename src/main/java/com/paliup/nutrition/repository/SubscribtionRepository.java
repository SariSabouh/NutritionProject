package com.paliup.nutrition.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.paliup.nutrition.model.Subscribtion;

@Repository
public interface SubscribtionRepository extends JpaRepository<Subscribtion, Long> {

}
