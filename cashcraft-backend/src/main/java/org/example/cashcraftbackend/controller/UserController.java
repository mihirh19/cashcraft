package org.example.cashcraftbackend.controller;

import org.example.cashcraftbackend.entity.Expense;
import org.example.cashcraftbackend.entity.Group;
import org.example.cashcraftbackend.entity.User;
import org.example.cashcraftbackend.event.RegistrationCompleteEvent;
import org.example.cashcraftbackend.model.JWTModel;
import org.example.cashcraftbackend.model.UserLogin;
import org.example.cashcraftbackend.model.UserModel;
import org.example.cashcraftbackend.service.UserService;
import org.example.cashcraftbackend.utility.JWTUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private JWTUtility jwtUtility;


    @Autowired
    private ApplicationEventPublisher publisher;

    @PostMapping("/register")
    public JWTModel registerUser(@RequestBody UserModel userModel){

        User user =userService.createUser(userModel);

        publisher.publishEvent(new RegistrationCompleteEvent(
                user,
                "url"
        ));

        final String token = jwtUtility.generateToken(user);

        return new JWTModel(token);
    }
    
    @PostMapping("/login")
    public JWTModel userLogin(@RequestBody UserLogin userLogin) throws Exception{

        User user = userService.userLogin(userLogin);
        if(user == null){
            throw new Exception("INVALID_CREDENTIALS");
        }



        final String token = jwtUtility.generateToken(user);

        return new JWTModel(token);
    }
    @GetMapping("/{id}")
    public User getUserById(@PathVariable("id") Long userId){
        return userService.getUserById(userId);
    }

    @GetMapping("/all")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/groups/{id}")
    public List<Group> getUserGroups(@PathVariable("id") Long userId){
        return userService.getUserGroups(userId);
    }

    @GetMapping("/expenses/{id}")
    public List<Expense> getUserExpenses(@PathVariable("id") Long userId){
        return userService.getUserExpenses(userId);
    }
    
    

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable("id") Long userId){
        return userService.deleteUser(userId);
    }
}
