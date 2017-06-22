package com.paliup.nutrition.service;

import static org.junit.Assert.*;

import java.util.Collection;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.test.context.junit4.SpringRunner;

import com.paliup.nutrition.model.User;
import com.paliup.nutrition.model.UserRole;

@RunWith(SpringRunner.class)
@DataJpaTest
@ComponentScan(basePackageClasses = { CustomUserDetails.class })
public class CustomUserDetailsTest {

	@Autowired
	private CustomUserDetails customUserDetails;

	@Autowired
	private TestEntityManager entityManager;

	@Test
	public void testIsAccountNonExpired() {
		customUserDetails.isAccountNonExpired();
		assertTrue(true);
	}

	@Test
	public void testIsAccountNonLocked() {
		customUserDetails.isAccountNonLocked();
		assertTrue(true);
	}

	@Test
	public void testIsCredentialsNonExpired() {
		customUserDetails.isCredentialsNonExpired();
		assertTrue(true);
	}

	@Test
	public void testIsEnabled() {
		customUserDetails.isEnabled();
		assertTrue(true);
	}

	@Test
	public void tesGetUsernameShouldReturnUserName() {

		String name = customUserDetails.getUsername();
		assertEquals(null, name);

	}

	@Test
	public void testGetAuthoritiesShouldReturnAllAuthorities() {
		entityManager.persist(new User());
		entityManager.persist(new UserRole((long) 1, "Admin"));
		Collection<? extends GrantedAuthority> roles = customUserDetails.getAuthorities();
		assertEquals(0, roles.size());
	}

}
