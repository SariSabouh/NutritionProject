package com.paliup.nutrition.service;

public interface SecurityService {
	

	String findLoggedInemail();
    void autologin(String email, String password);

	
	

	
}

