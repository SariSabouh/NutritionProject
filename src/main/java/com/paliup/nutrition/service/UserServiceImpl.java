package com.paliup.nutrition.service;


import org.springframework.beans.factory.annotation.Autowired;

import com.paliup.nutrition.model.Coach;
import com.paliup.nutrition.model.Customer;
import com.paliup.nutrition.model.CustomerCoach;
import com.paliup.nutrition.model.CustomerMedical;
import com.paliup.nutrition.model.CustomerPackage;
import com.paliup.nutrition.model.Medical;
import com.paliup.nutrition.model.Package1;
import com.paliup.nutrition.model.Payment;
import com.paliup.nutrition.model.User;
import com.paliup.nutrition.repository.CoachRepository;
import com.paliup.nutrition.repository.CustomerCoachRepository;
import com.paliup.nutrition.repository.CustomerMedicalRepository;
import com.paliup.nutrition.repository.CustomerPackageRepository;
import com.paliup.nutrition.repository.CustomerRepository;
import com.paliup.nutrition.repository.MedicalRepository;
import com.paliup.nutrition.repository.PackageRepository;
import com.paliup.nutrition.repository.PaymentRepository;
import com.paliup.nutrition.repository.UserRepository;



public class UserServiceImpl implements UserService{

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
	private PackageRepository packageRepository;
	
	@Autowired
	private CustomerPackageRepository customerpackageRepository;
	
	
	
	
	


	@Override
	public long saveUser(User user) {
		user.setEmail(user.getEmail());
		user.setPassword(user.getPassword());
		User newUser = userRepository.save(user);
		return newUser.getId();	
	}


	@Override
	public long saveMedical(Medical medical) {
		medical.setNameOfMedical(medical.getNameOfMedical());
		Medical newMedical = medicalRepository.save(medical);
		return newMedical.getId();
		
		
	}
	
	@Override
	public long saveCustomer(Customer cust , long userId){
		cust.setFirstName(cust.getFirstName());
		cust.setLastName(cust.getLastName());
		cust.setDateOfBirth(cust.getDateOfBirth());
		cust.setUserId(userId);
		Customer customer = customerRepository.save(cust);
		return customer.getId();	
	}

	@Override
	public void saveCustomerMedical(CustomerMedical custmid , long customerId , long medicalId) {
		custmid.setMedicalid(medicalId);
		custmid.setCustomerid(customerId);
		customerMedicalRepository.save(custmid);
		
	}


	@Override
	public void savePayment(Payment payment , long customerId) {
		payment.setAccountNumber(payment.getAccountNumber());
		payment.setCustomerId(customerId);
		paymentRepository.save(payment);
		
		
	}


	@Override
	public long saveCoach(Coach coach ,long userId) {
		coach.setFirstName(coach.getFirstName());
		coach.setLastName(coach.getLastName());
		coach.setPhone(coach.getPhone());
		coach.setUserId(userId);
		coach.setDateOfBirth(coach.getDateOfBirth());
		Coach rcoach = coachRepository.save(coach);
		return rcoach.getId();
		
	}


	@Override
	public void saveCustomerCoach(CustomerCoach customercoach, long customerId, long coachId) {
		customercoach.setCustomerId(customerId);
		customercoach.setCaochId(coachId);
		customercoachRepository.save(customercoach);
		
	}


	@Override
	public long savePackage(Package1 package1) {
		package1.setName(package1.getName());
		Package1 package2 = packageRepository.save(package1);
		return package2.getId();
		
		
		
	}


	@Override
	public void saveCustomerPackage(CustomerPackage customerpackage, long packageId, long customerId) {
		customerpackage.setCustomerId(customerId);
		customerpackage.setPackageId(packageId);
		customerpackageRepository.save(customerpackage);
		
	}


	


	
	


}