package com.paliup.nutrition.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.paliup.nutrition.service.UserService;
import com.paliup.nutrition.service.UserServiceImpl;

@Configuration
public class AppConfig {
    @Bean
    public UserService transferService() {
        return new UserServiceImpl();
    }
}