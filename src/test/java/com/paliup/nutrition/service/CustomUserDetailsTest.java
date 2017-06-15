package com.paliup.nutrition.service;

import static org.junit.Assert.*;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.test.context.junit4.SpringRunner;;
@RunWith(SpringRunner.class)
@Ignore
@ComponentScan(basePackageClasses = { UserDetails.class , CustomUserDetails.class })
public class CustomUserDetailsTest {

	@Autowired
	private UserDetails customUserDetails;

	@Test
	public void testIsAccountNonExpired() {

	 customUserDetails.isAccountNonExpired();

	}

}
