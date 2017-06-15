package com.paliup.nutrition.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.paliup.nutrition.model.Coach;

@Repository
public interface CoachRepository extends JpaRepository<Coach, Long> {

}