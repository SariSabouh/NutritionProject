package com.paliup.nutrition.service;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.context.junit4.SpringRunner;

import com.paliup.nutrition.config.SecurityConfig;

@RunWith(SpringRunner.class)
@DataJpaTest
@ComponentScan(basePackageClasses = { CustomUserDetails.class , SecurityConfig.class })
public class CustomUserDetailsTest {

	@Autowired
	private CustomUserDetails customUserDetails;

	@Test
	public void testIsAccountNonExpired() {

		assertTrue(customUserDetails.isAccountNonExpired());
	}

	@Test
	public void testIsAccountNonLocked() {
		assertTrue(customUserDetails.isAccountNonLocked());
	}

	@Test
	public void testIsCredentialsNonExpired() {

		assertTrue(customUserDetails.isCredentialsNonExpired());
	}

	@Test
	public void testIsEnabled() {

		assertTrue(customUserDetails.isEnabled());
	}

}
