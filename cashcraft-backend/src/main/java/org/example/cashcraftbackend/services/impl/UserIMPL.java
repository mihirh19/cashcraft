package org.example.cashcraftbackend.services.impl;

import org.example.cashcraftbackend.Dto.UserDTO;
import org.example.cashcraftbackend.Repo.UserRepo;
import org.example.cashcraftbackend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;

public class UserIMPL  implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public String addUser(UserDTO userDTO) {
        return null;
    }
}
