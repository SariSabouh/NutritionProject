package com.paliup.nutrition.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;

import com.paliup.nutrition.controller.HomeController;
import com.paliup.nutrition.service.CustomUserDetails;
import com.paliup.nutrition.service.PersistanceService;

@Configuration
@ComponentScan("com.paliup.nutrition.service")
@ComponentScan("com.paliup.nutrition.controller")
public class AppConfig {

	@Bean
	public PersistanceService transferService() {
		return new PersistanceService();
	}

	@Bean
	public CustomUserDetails transferServiceCustomUserDetails() {
		return new CustomUserDetails();
	}


}