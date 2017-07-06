package com.paliup.nutrition.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

	public HomeController () {}

	@RequestMapping({ "/", "/index", "home", "body" })
	public String root() {
		return "index";
	}

	@RequestMapping("/user/landing")
	public String userIndex() {
		return "user/landing";
	}

	@RequestMapping(value = "/login")
	public String login() {
		return "login";
	}

	@RequestMapping("/login-error")
	public String loginError(Model model) {
		model.addAttribute("loginError", true);
		return "index";
	}

}
