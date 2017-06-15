package com.paliup.nutrition.service;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.context.junit4.SpringRunner;

import com.paliup.nutrition.model.Coach;
import com.paliup.nutrition.model.Customer;
import com.paliup.nutrition.model.CustomerCoach;
import com.paliup.nutrition.model.CustomerMedical;
import com.paliup.nutrition.model.CustomerSubscribtion;
import com.paliup.nutrition.model.Medical;
import com.paliup.nutrition.model.Payment;
import com.paliup.nutrition.model.Subscribtion;
import com.paliup.nutrition.model.User;
import com.paliup.nutrition.repository.CustomerCoachRepository;
import com.paliup.nutrition.repository.CustomerMedicalRepository;
import com.paliup.nutrition.repository.CustomerRepository;
import com.paliup.nutrition.repository.CustomerSubscribtionRepository;
import com.paliup.nutrition.repository.PaymentRepository;
import com.paliup.nutrition.repository.SubscribtionRepository;

@RunWith(SpringRunner.class)
@DataJpaTest
@ComponentScan(basePackageClasses = { PersistanceService.class })
public class PersistanceServiceClassTest {

	@Autowired
	private TestEntityManager entityManager;

	@Autowired
	private PersistanceService persistanceService;

	@Autowired
	private CustomerCoachRepository custCoachRepo;

	@Autowired
	private CustomerRepository custRepo;

	@Autowired
	private CustomerSubscribtionRepository custSubRepo;

	@Autowired
	private PaymentRepository paymentRepository;

	@Autowired
	private CustomerMedicalRepository custMedicalRepo;
	
	@Autowired
	private SubscribtionRepository subscribtionRepo;

	@Test
	public void testSaveUserShouldReturnUserId() {
		User user = this.entityManager.persist(new User());
		long id = persistanceService.saveUser(user);
		assertEquals(1, id);
	}

	@Test
	public void testSaveCoachShouldReturnCaochId() {

		Coach coach = this.entityManager.persist(new Coach());
		long id = persistanceService.saveCoach(coach, 1);
		assertEquals(2, id);

	}

	@Test
	public void testSavePaymentShouldReturnPaymentId() {
		Payment payment = this.entityManager.persist(new Payment());
		persistanceService.savePayment(payment, 1);
		List<Payment> paymentList = paymentRepository.findAll();
		assertEquals(1, paymentList.size());
		long paymentId = paymentList.get(0).getId();
		assertEquals(1, paymentId);
	}

	@Test
	public void testSaveMedicalShouldReturnMedicalId() {
		Medical medical = this.entityManager.persist(new Medical("flu"));
		long id = persistanceService.saveMedical(medical);
		assertEquals(1, id);
	}

	@Test
	public void testSaveCustomerMedicalShouldReturnCustomerMedicalId() {
		CustomerMedical customerMedical = this.entityManager.persist(new CustomerMedical());
		this.entityManager.persist(new Customer("test"));
		this.entityManager.persist(new Medical("flu"));
		persistanceService.saveCustomerMedical(customerMedical, 1, 1);
		List<CustomerMedical> customerMedicalList = custMedicalRepo.findAll();
		assertEquals(1, customerMedicalList.size());
		long customerMedicalId = customerMedicalList.get(0).getId();
		assertEquals(1, customerMedicalId);

	}

	@Test
	public void testSaveCustomerShouldReturnCustomerId() {
		Customer customer = this.entityManager.persist(new Customer("Sari"));
		long id = persistanceService.saveCustomer(customer, 1);
		assertEquals(2, id);
	}

	@Test
	public void testSaveCustomerCoachShouldReturnCustomerCoachId() {
		CustomerCoach customerCoach = this.entityManager.persist(new CustomerCoach());
		Coach coach = new Coach();
		coach.setFirstName("Coach");
		this.entityManager.persist(coach);
		this.entityManager.persist(new Customer("Test"));
		persistanceService.saveCustomerCoach(customerCoach, 1, 1);
		List<CustomerCoach> custCoachList = custCoachRepo.findAll();
		assertEquals(1, custCoachList.size());
		customerCoach = custCoachList.get(0);
		assertEquals("Test", custRepo.findOne(customerCoach.getCustomerId()).getFirstName());
	}


	
	@Test
	public void  testSaveSubscribtionShouldReturnSubscribtionId(){
		Subscribtion subscribtion = this.entityManager.persist(new Subscribtion());
		persistanceService.saveSubscribtion(subscribtion);
		List<Subscribtion> subscribtionList = subscribtionRepo.findAll();
		assertEquals(1 , subscribtionList.size());
		long SubscribtionId = subscribtionList.get(0).getId();
		assertEquals(2 , SubscribtionId);
		
		
	}

	@Test
	public void testSaveCustomerSubscriptionShouldReturnCustomerSubscriptionId() {
		CustomerSubscribtion customerSubscribtion = new CustomerSubscribtion();
		Subscribtion subscribtion = new Subscribtion();
		subscribtion.setName("basic");
		this.entityManager.persist(subscribtion);
		this.entityManager.persist(new Customer("cust1"));
		persistanceService.saveCustomerSubscribtion(customerSubscribtion, 1, 1);
		List<CustomerSubscribtion> custSubList = custSubRepo.findAll();
		assertEquals(1, custSubList.size());

	}

}
