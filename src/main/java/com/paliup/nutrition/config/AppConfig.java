package com.paliup.nutrition.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.paliup.nutrition.service.PersistanceService;

@Configuration
public class AppConfig {

	@Bean
	public PersistanceService transferService() {
		return new PersistanceService();
	}
}