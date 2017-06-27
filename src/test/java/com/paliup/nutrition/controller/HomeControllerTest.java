package com.paliup.nutrition.controller;

import static org.junit.Assert.*;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.ui.ExtendedModelMap;
import org.springframework.ui.Model;

@RunWith(SpringRunner.class)
@ComponentScan(basePackageClasses = { HomeController.class })
public class HomeControllerTest {

	HomeController controller = new HomeController();

	@Test
	public void testRootShouldReturnIndexView() {
		String viewName = controller.root();
		assertEquals("index", viewName);
	}

	@Test
	public void testUserIndexShouldReturnUserloggedInView() {
		String viewName = controller.userIndex();
		assertEquals("user/landing", viewName);
	}

	@Test
	public void testLoginShouldReturnLogInView() {
		String viewName = controller.login();
		assertEquals("login", viewName);
	}

	@Test
	public void testLoginErrorShouldReturnIndexView() {
		Model model = new ExtendedModelMap();
		String viewName = controller.loginError(model);
		assertEquals("index", viewName);
	}

}
