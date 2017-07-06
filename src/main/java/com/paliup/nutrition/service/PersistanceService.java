package com.paliup.nutrition.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.paliup.nutrition.model.Coach;
import com.paliup.nutrition.model.Customer;
import com.paliup.nutrition.model.CustomerCoach;
import com.paliup.nutrition.model.CustomerMedical;
import com.paliup.nutrition.model.CustomerSubscribtion;
import com.paliup.nutrition.model.Medical;
import com.paliup.nutrition.model.Payment;
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

@Service("persistanceService")
public class PersistanceService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private MedicalRepository medicalRepository;

	@Autowired
	private CustomerMedicalRepository customerMedicalRepository;

	@Autowired
	private CustomerRepository customerRepository;

	@Autowired
	private PaymentRepository paymentRepository;

	@Autowired
	private CoachRepository coachRepository;

	@Autowired
	private CustomerCoachRepository customercoachRepository;

	@Autowired
	private SubscribtionRepository subscribtionRepository;

	@Autowired
	private CustomerSubscribtionRepository customerSubscribtionRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	public long saveUser(User user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		User newUser = userRepository.save(user);
		return newUser.getId();
	}

	public long saveMedical(Medical medical) {
		medical = medicalRepository.save(medical);
		return medical.getId();
	}

	public long saveCustomer(Customer customer, long userId) {
		customer.setUserId(userId);
		customer = customerRepository.save(customer);
		return customer.getId();
	}

	public void saveCustomerMedical(CustomerMedical custMedId, long customerId, long medicalId) {
		custMedId.setMedicalid(medicalId);
		custMedId.setCustomerid(customerId);
		customerMedicalRepository.save(custMedId);
	}

	public void savePayment(Payment payment, long customerId) {
		payment.setCustomerId(customerId);
		paymentRepository.save(payment);
	}

	public long saveCoach(Coach coach, long userId) {
		coach.setUserId(userId);
		coach = coachRepository.save(coach);
		return coach.getId();
	}

	public void saveCustomerCoach(CustomerCoach customerCoach, long customerId, long coachId) {
		customerCoach.setCustomerId(customerId);
		customerCoach.setCaochId(coachId);
		customercoachRepository.save(customerCoach);
	}

	public long saveSubscribtion(Subscribtion subscribtion) {
		subscribtion = subscribtionRepository.save(subscribtion);
		return subscribtion.getId();
	}

	public void saveCustomerSubscribtion(CustomerSubscribtion customerSubscribtion, long packageId, long customerId) {
		customerSubscribtion.setCustomerId(customerId);
		customerSubscribtion.setSubscribtionId(packageId);
		customerSubscribtionRepository.save(customerSubscribtion);
	}

}
