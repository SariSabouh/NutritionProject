package com.paliup.nutrition.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.paliup.nutrition.model.CustomerCoach;

@Repository
public interface CustomerCoachRepository extends JpaRepository<CustomerCoach, Long> {

}
