package org.example.cashcraftbackend.service;


import org.example.cashcraftbackend.entity.Expense;
import org.example.cashcraftbackend.entity.Group;
import org.example.cashcraftbackend.entity.User;
import org.example.cashcraftbackend.model.UserLogin;
import org.example.cashcraftbackend.model.UserModel;
import org.example.cashcraftbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImp implements UserService, UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public User createUser(UserModel userModel) {
        User user = new User();

        user.setUserFirstName(userModel.getUserFirstName());
        user.setUserLastName(userModel.getUserLastName());
        user.setUserName(userModel.getUserName());
        user.setUserPassword(passwordEncoder.encode(userModel.getUserPassword()));
        user.setUserGroups(null);
        user.setRole("USER");
        userRepository.save(user);
        return user;
    }

    @Override
    public User getUserById(Long userId) {
        return userRepository.findById(userId).get();
    }

    @Override
    public List<Group> getUserGroups(Long userId) {
        return userRepository.findById(userId).get().getUserGroups();
    }

    @Override
    public List<Expense> getUserExpenses(Long userId) {
        return userRepository.findById(userId).get().getExpenses();
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public String deleteUser(Long userId) {
        userRepository.deleteById(userId);
        return "user deleted";
    }

    @Override
    public User userLogin(UserLogin userLogin) {
        User user = userRepository.findByUserName(userLogin.getUsername());
        if(user ==null){
            return null;
        }
        if(passwordEncoder.matches(userLogin.getPassword(),user.getUserPassword())){
            return user;
        }
        return null;
    }

    @Override
    public UserDetails loadUserByUserId(Long userId) {
        return userRepository.findById(userId).get();
    }

    @Override
    public User loadUserByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return null;
    }
}
