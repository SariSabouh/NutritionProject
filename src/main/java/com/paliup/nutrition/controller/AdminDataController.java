package com.paliup.nutrition.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.paliup.nutrition.model.Coach;
import com.paliup.nutrition.model.Customer;
import com.paliup.nutrition.model.User;
import com.paliup.nutrition.repository.CoachRepository;
import com.paliup.nutrition.repository.CustomerRepository;
import com.paliup.nutrition.repository.UserRepository;

@RestController
public class AdminDataController {

private final Logger log = LoggerFactory.getLogger(this.getClass());

	@Autowired
	CustomerRepository customerRepo;
	
	@Autowired
	CoachRepository coachRepo;
	
	@Autowired
	UserRepository userRepo;
	
	@RequestMapping(value = "/api/auth/user-list",  method = RequestMethod.GET)
	public List<Customer> getUsersList() {
		List<User> userList = userRepo.findAll();
		List<Customer> customerList = customerRepo.findAll();
		customerList.stream().forEach(c -> c.setEmail(userList.stream().filter(u -> u.getId() == c.getUserId()).findFirst().get().getEmail()));
		return customerList;
	}

	
	@RequestMapping(value = "/api/auth/coach-list",  method = RequestMethod.GET)
	public List<Coach> getCoachList() {
		List<User> userList = userRepo.findAll();
		List<Coach> coachList = coachRepo.findAll();
		coachList.stream().forEach(c -> c.setEmail(userList.stream().filter(u -> u.getId() == c.getUserId()).findFirst().get().getEmail()));
		return coachList;
	}
}
