package org.example.cashcraftbackend.service;


import org.example.cashcraftbackend.entity.Expense;
import org.example.cashcraftbackend.entity.Group;
import org.example.cashcraftbackend.entity.User;
import org.example.cashcraftbackend.model.UserLogin;
import org.example.cashcraftbackend.model.UserModel;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;


public interface UserService {
    User createUser(UserModel userModel);

    User getUserById(Long userId);

    List<Group> getUserGroups(Long userId);

    List<Expense> getUserExpenses(Long userId);

    List<User> getAllUsers();

    String deleteUser(Long userId);

    User userLogin(UserLogin userLogin);

    UserDetails loadUserByUserId(Long userId);

    User loadUserByUserName(String userName);
}
