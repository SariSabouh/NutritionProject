package com.paliup.nutrition.config;

import static org.junit.Assert.*;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.context.junit4.SpringRunner;

import com.paliup.nutrition.service.PersistanceService;

@RunWith(SpringRunner.class)
@ComponentScan(basePackageClasses = { PersistanceService.class, AppConfig.class })
public class AppConfigTest {

	AppConfig appConfig = new AppConfig();

	@Test
	public void testPersistanceServiceBean() {
		assertEquals("class com.paliup.nutrition.service.PersistanceService",
				this.appConfig.transferService().getClass().toString());
	}

	@Test
	public void testCustomUserDetailsBean() {
		assertEquals("class com.paliup.nutrition.service.CustomUserDetails",
				this.appConfig.transferServiceCustomUserDetails().getClass().toString());
	}

	@Test
	public void testHomeControllerBean() {
		assertEquals("class com.paliup.nutrition.controller.HomeController",
				this.appConfig.transferServiceHomeController().getClass().toString());

	}

}
