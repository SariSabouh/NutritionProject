package com.paliup.nutrition.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.paliup.nutrition.model.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
	public User findByEmail(String email);
}