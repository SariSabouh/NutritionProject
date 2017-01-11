package com.paliup.nutrition.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.paliup.nutrition.model.UserRole;

@Repository
public interface UserRoleRepository extends CrudRepository<UserRole, Long> {

	@Query("select a.role from UserRole a, User b where b.email=?1 and a.userId=b.id")
	public List<String> findRoleByEmail(String email);

}