package com.paliup.nutrition.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.test.context.junit4.SpringRunner;

import com.paliup.nutrition.model.User;

@RunWith(SpringRunner.class)
@DataJpaTest
@ComponentScan(basePackageClasses = { CustomUserDetails.class })
public class CustomUserDeatailsServiceTest {

	@Autowired
	private TestEntityManager entityManager;

	@Autowired
	CustomUserDetailsService customUserDetailsService;

	@Test(expected = UsernameNotFoundException.class)
	public void testLoadUserByUsernameIfCondition() {
		this.entityManager.persist(new User("a@a", "123"));
		customUserDetailsService.loadUserByUsername("aa");
	}

	@Test
	public void testLoadUserByUsernameElseCondition() {

		this.entityManager.persist(new User("a@a", "123"));
		customUserDetailsService.loadUserByUsername("a@a");
	}

}
