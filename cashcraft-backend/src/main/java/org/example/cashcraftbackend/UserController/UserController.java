package org.example.cashcraftbackend.UserController;


import org.example.cashcraftbackend.Dto.UserDTO;
import org.example.cashcraftbackend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/save")
    public String saveUser(@RequestBody UserDTO userDTO){
        String id   =
    }
}
