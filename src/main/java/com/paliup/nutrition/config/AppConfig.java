package com.paliup.nutrition.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

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