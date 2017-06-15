package com.paliup.nutrition.repository;

import static org.junit.Assert.*;

import java.util.List;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import com.paliup.nutrition.model.User;
import com.paliup.nutrition.model.UserRole;
import com.paliup.nutrition.repository.UserRoleRepository;

@RunWith(SpringRunner.class)
@DataJpaTest
public class UserRoleRepositoryTest {

	@Autowired
	private TestEntityManager entityManager;

	@Autowired
	private UserRoleRepository userRoleRepository;

	@Test
	public void findRoleByEmailShouldReturnRole() {
		this.entityManager.persist(new User("a@a", "123"));
		this.entityManager.persist(new UserRole((long) 1, "Admin"));
		List<String> Role = this.userRoleRepository.findRoleByEmail("a@a");
		String roleName = Role.get(0);
		List<UserRole> userRole = (List<UserRole>) userRoleRepository.findAll();
		assertEquals(1, userRole.size());
		assertEquals("Admin", roleName);

	}

}
