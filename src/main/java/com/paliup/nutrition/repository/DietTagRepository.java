package com.paliup.nutrition.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.paliup.nutrition.model.DietTag;

@Repository
public interface DietTagRepository extends JpaRepository<DietTag, Long> {
	
	@Query("select tag from DietTag")
	public List<String> findAllTags();

}
