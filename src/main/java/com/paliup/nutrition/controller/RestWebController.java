package com.paliup.nutrition.controller;

import java.io.IOException;
import java.util.List;

import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.paliup.nutrition.model.Coach;
import com.paliup.nutrition.model.Customer;
import com.paliup.nutrition.model.CustomerCoach;
import com.paliup.nutrition.model.CustomerMedical;
import com.paliup.nutrition.model.CustomerSubscribtion;
import com.paliup.nutrition.model.DietTag;
import com.paliup.nutrition.model.Medical;
import com.paliup.nutrition.model.Payment;
import com.paliup.nutrition.model.Response;
import com.paliup.nutrition.model.Subscribtion;
import com.paliup.nutrition.model.User;
import com.paliup.nutrition.repository.DietTagRepository;
import com.paliup.nutrition.service.PersistanceService;

@RestController
public class RestWebController {

	@Autowired
	private PersistanceService persistanceService;
	
	@Autowired
	private DietTagRepository dietTagRepository;

	@RequestMapping(value = "/api/tags",  method = RequestMethod.GET)
	public List<String> getTags(){
		List<String> dietTags = null;
		if(dietTagRepository != null){
			dietTags = dietTagRepository.findAllTags();
		}
		return dietTags;
	}
	
	@RequestMapping(value = "/api/tags",  method = RequestMethod.POST)
	public void setTags(@RequestBody String jsonTags){
		JSONArray tags = new JSONArray(jsonTags);
		for (int i = 0; i<tags.length(); i++) {
			if(dietTagRepository != null){
				dietTagRepository.save(new DietTag(tags.get(i).toString()));
			}
		}
	}
	
	@RequestMapping(value = "/post", method = RequestMethod.POST)
	public Response postCustomer(@RequestBody String registraionString) throws JsonProcessingException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		JsonNode node = mapper.readTree(registraionString);

		User user = mapper.convertValue(node.get("user"), User.class);
		Customer customer = mapper.convertValue(node.get("customer"), Customer.class);
		Medical medical = mapper.convertValue(node.get("medical"), Medical.class);
		Payment payment = mapper.convertValue(node.get("payment"), Payment.class);
		Coach coach = mapper.convertValue(node.get("coach"), Coach.class);
		Subscribtion subscribtion = mapper.convertValue(node.get("package"), Subscribtion.class);

		//getObjects(user, customer, medical, payment, coach, subscribtion);

		Response response = new Response("Done", user);

		return response;
	}

	public void getObjects(User user, Customer customer, Medical medical, Payment payment, Coach coach,
			Subscribtion subscribtion) {
		CustomerMedical custmid = new CustomerMedical();
		CustomerCoach customercoach = new CustomerCoach();
		CustomerSubscribtion customerSubscribtion = new CustomerSubscribtion();
		long userId = persistanceService.saveUser(user);
		long customerId = persistanceService.saveCustomer(customer, userId);
		long coachId = persistanceService.saveCoach(coach, userId);
		long subscribtionId = persistanceService.saveSubscribtion(subscribtion);
		long medicalId = persistanceService.saveMedical(medical);

		persistanceService.saveCustomerCoach(customercoach, customerId, coachId);
		persistanceService.saveCustomerSubscribtion(customerSubscribtion, subscribtionId, customerId);
		persistanceService.saveCustomerMedical(custmid, customerId, medicalId);
		persistanceService.savePayment(payment, customerId);

	}

}
