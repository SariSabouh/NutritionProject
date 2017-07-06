package com.paliup.nutrition.repository;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import com.paliup.nutrition.model.User;
import com.paliup.nutrition.repository.UserRepository;

@RunWith(SpringRunner.class)
@DataJpaTest
public class UserRepositoryTests {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private UserRepository userRepository;

    @Test
    public void findByEmailShouldReturnUser() {
        entityManager.persist(new User("a@a", "123123"));
        User user = this.userRepository.findByEmail("a@a");
        
        assertEquals("a@a" , user.getEmail());
        assertEquals("123123" , user.getPassword());
    }

}