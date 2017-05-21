package com.paliup.nutrition.service;

import com.paliup.nutrition.model.Coach;
import com.paliup.nutrition.model.Customer;
import com.paliup.nutrition.model.CustomerCoach;
import com.paliup.nutrition.model.CustomerMedical;
import com.paliup.nutrition.model.CustomerPackage;
import com.paliup.nutrition.model.Medical;
import com.paliup.nutrition.model.Package1;
import com.paliup.nutrition.model.Payment;
import com.paliup.nutrition.model.User;



public interface UserService {
	
	
	
	public long saveUser(User user);
	public long saveCustomer(Customer customer , long userId);
	public long saveMedical(Medical medical);
	public void saveCustomerMedical(CustomerMedical custmid , long customerId , long medicalId);
	public void savePayment(Payment payment , long customerId );
	public long saveCoach(Coach coach , long userId);
	public void saveCustomerCoach(CustomerCoach customercoach , long customerId , long coachId);
	public long savePackage(Package1 package1);
	public void saveCustomerPackage(CustomerPackage customerpackage , long packageId , long customerId );
	
}

