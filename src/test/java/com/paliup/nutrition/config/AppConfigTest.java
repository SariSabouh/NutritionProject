package com.paliup.nutrition.config;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
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
				appConfig.transferService().getClass().toString());
	}

	@Test
	public void testCustomUserDetailsBean() {
		assertEquals("class com.paliup.nutrition.service.CustomUserDetails",
				appConfig.transferServiceCustomUserDetails().getClass().toString());
	}



}
