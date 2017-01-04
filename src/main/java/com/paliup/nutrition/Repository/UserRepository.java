package com.paliup.nutrition.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paliup.nutrition.Model.User;



public interface UserRepository extends JpaRepository<User, Long> {
    User findByemail(String email);
}
