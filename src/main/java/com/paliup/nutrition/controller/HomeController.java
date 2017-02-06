package com.paliup.nutrition.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	
	@RequestMapping({"/", "/index", "home"})
	public String root() {
		return "index";
	}

	@RequestMapping("/user/loggedIn")
	public String userIndex() {
		return "user/loggedIn";
	}

	@RequestMapping(value = "/login")
	public String login() {
		return "login";
	}
	
	@RequestMapping(value = "/login-error")
	public String loginError() {
		return "login-error";
	}
	
}
