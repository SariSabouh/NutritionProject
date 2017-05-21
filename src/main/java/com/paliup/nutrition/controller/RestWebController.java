package com.paliup.nutrition.controller;
import java.io.IOException;

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
import com.paliup.nutrition.model.CustomerPackage;
import com.paliup.nutrition.model.Medical;
import com.paliup.nutrition.model.Package1;
import com.paliup.nutrition.model.Payment;
import com.paliup.nutrition.model.Response;
import com.paliup.nutrition.model.User;
import com.paliup.nutrition.service.UserService;





@RestController
public class RestWebController {
	
	@Autowired
	private UserService userService;
	
	private boolean testing = false;
	
	
	public void setTesting(boolean testing) {
		testing = true;
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
		Package1 package1 = mapper.convertValue(node.get("package"), Package1.class);

		if(!testing)
			getObjects(user , customer  , medical, payment , coach, package1 );
		

		Response response = new Response("Done" , user);
		
		return response;
	}
	
	
	public void getObjects(User user , Customer customer , Medical medical , Payment payment ,Coach coach , Package1 package1){
		CustomerMedical custmid = new CustomerMedical();
		CustomerCoach customercoach = new CustomerCoach();
		CustomerPackage customerpackage = new CustomerPackage();
		long userId = userService.saveUser(user);
		long customerId = userService.saveCustomer(customer , userId);
		long coachId = userService.saveCoach(coach, userId);
		long packageId = userService.savePackage(package1);
		long medicalId = userService.saveMedical(medical);
		
		userService.saveCustomerCoach(customercoach, customerId, coachId);
		userService.saveCustomerPackage(customerpackage, packageId, customerId);
		userService.saveCustomerMedical(custmid, customerId, medicalId);
		userService.savePayment(payment, customerId);
	
	}

}
