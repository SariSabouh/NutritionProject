package com.paliup.nutrition.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

	public HomeController() {}

	@RequestMapping({ "/", "/index", "home", "body" })
	public String root() {
		return "index";
	}

	@RequestMapping("/user/landing")
	public String userIndex() {
		return "user/landing";

	}
	
	@RequestMapping("/user/user-profile")
	public String userProfile() {
		return "user/user-profile";

	}
	
	@RequestMapping("/admin/landing")
	public String adminIndex() {
		
		return "user/Adminlanding";
	}
	
	
	@RequestMapping("/admin/customers")
	public String lsitCustomers() {
		return "user/customers";
	}
	
	@RequestMapping("/admin/coaches")
	public String lsitCoaches() {
		return "user/coaches";
	}
	
	@RequestMapping("/admin/reviews")
	public String lsitReviews() {
		return "user/reviews";
	}
	
	@RequestMapping("/admin/inbox")
	public String lsitMails() {
		return "user/inbox";
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
