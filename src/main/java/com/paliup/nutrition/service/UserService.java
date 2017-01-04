package com.paliup.nutrition.service;
import com.paliup.nutrition.Model.User;

public interface UserService {
    void save(User user);

    User findByEmail(String username);
}

