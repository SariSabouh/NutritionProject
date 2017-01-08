package com.paliup.nutrition.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.paliup.nutrition.model.User;
import com.paliup.nutrition.repository.UserRepository;
import com.paliup.nutrition.repository.UserRoleRepository;

@Service("customUserDetailsService")
public class CustomUserDetailsService implements UserDetailsService {
	private final UserRepository userRepository;
	private final UserRoleRepository userRoleRepository;

	@Autowired
	public CustomUserDetailsService(UserRepository userRepository, UserRoleRepository userRolesRepository) {
		this.userRepository = userRepository;
		this.userRoleRepository = userRolesRepository;
	}

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		User user = userRepository.findByEmail(email);
		if (null == user) {
			throw new UsernameNotFoundException("No user present with email: " + email);
		} else {
			List<String> userRoles = userRoleRepository.findRoleByEmail(email);
			return new CustomUserDetails(user, userRoles);
		}
	}

}