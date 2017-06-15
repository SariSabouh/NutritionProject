package com.paliup.nutrition.controller;

import java.io.IOException;
import java.util.List;

import static org.junit.Assert.*;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.context.junit4.SpringRunner;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.paliup.nutrition.model.Coach;
import com.paliup.nutrition.model.Customer;
import com.paliup.nutrition.model.CustomerCoach;
import com.paliup.nutrition.model.CustomerMedical;
import com.paliup.nutrition.model.CustomerSubscribtion;
import com.paliup.nutrition.model.Medical;
import com.paliup.nutrition.model.Payment;
import com.paliup.nutrition.model.Response;
import com.paliup.nutrition.model.Subscribtion;
import com.paliup.nutrition.model.User;
import com.paliup.nutrition.repository.CoachRepository;
import com.paliup.nutrition.repository.CustomerCoachRepository;
import com.paliup.nutrition.repository.CustomerMedicalRepository;
import com.paliup.nutrition.repository.CustomerRepository;
import com.paliup.nutrition.repository.CustomerSubscribtionRepository;
import com.paliup.nutrition.repository.MedicalRepository;
import com.paliup.nutrition.repository.PaymentRepository;
import com.paliup.nutrition.repository.SubscribtionRepository;
import com.paliup.nutrition.repository.UserRepository;
import com.paliup.nutrition.service.PersistanceService;

@RunWith(SpringRunner.class)
@DataJpaTest
@ComponentScan(basePackageClasses = { RestWebController.class, PersistanceService.class })
public class RestWebControllerTest {

	@Autowired
	RestWebController restWebController;

	@Autowired
	PersistanceService persistanceService;

	@Autowired
	private UserRepository userRepo;
	@Autowired
	private CoachRepository coachRepo;
	@Autowired
	private PaymentRepository paymentRepo;
	@Autowired
	private MedicalRepository medicalRepo;
	@Autowired
	private CustomerRepository customerRepo;
	@Autowired
	private SubscribtionRepository subscribtionRepo;
	@Autowired
	private CustomerMedicalRepository customerMedicalRepo;
	@Autowired
	private CustomerCoachRepository customerCoachRepo;
	@Autowired
	private CustomerSubscribtionRepository customerSubscribtionRepo;

	 @Test
	 public void testPostCustomerShouldReturnDoneResponse() throws
	 JsonProcessingException, IOException{
	 final String json =
	 "{\"id\":1,\"firstName\":\"test\",\"lastName\":\"testo\",\"dateOfBirth\":\"1.1.1996\",\"email\":\"a@a\",\"accountNumber\":\"1234\",\"nameOfMedical\":\"flu\",\"subscribtion\":\"basic\"}";
	 Response response = restWebController.postCustomer(json);
	 assertEquals("Done" , response.getStatus());
	 }

	@Test
	public void testGetObjectsShouldPersistAllObjects() {
		User user = new User();
		Coach coach = new Coach();
		Payment payment = new Payment();
		Medical medical = new Medical("flu");
		Customer customer = new Customer("Sari");
		Subscribtion subscribtion = new Subscribtion();

		restWebController.getObjects(user, customer, medical, payment, coach, subscribtion);

		List<User> userList = (List<User>) userRepo.findAll();
		List<Coach> coachList = coachRepo.findAll();
		List<Payment> paymentList = paymentRepo.findAll();
		List<Medical> medicalList = medicalRepo.findAll();
		List<Customer> customerList = customerRepo.findAll();
		List<Subscribtion> subscribtionList = subscribtionRepo.findAll();
		List<CustomerMedical> customerMedical = customerMedicalRepo.findAll();
		List<CustomerCoach> customerCoach = customerCoachRepo.findAll();
		List<CustomerSubscribtion> customerSubscribtion = customerSubscribtionRepo.findAll();

		assertEquals(1, userList.size());
		assertEquals(1, coachList.size());
		assertEquals(1, paymentList.size());
		assertEquals(1, medicalList.size());
		assertEquals(1, customerList.size());
		assertEquals(1, subscribtionList.size());
		assertEquals(1, customerMedical.size());
		assertEquals(1, customerCoach.size());
		assertEquals(1, customerSubscribtion.size());

	}

}
