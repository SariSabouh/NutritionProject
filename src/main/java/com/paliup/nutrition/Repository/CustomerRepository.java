package com.paliup.nutrition.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.paliup.nutrition.Model.Account;


@Repository
public interface CustomerRepository extends JpaRepository<Account, Long> {
    Account findByEmail(String Email);
}
