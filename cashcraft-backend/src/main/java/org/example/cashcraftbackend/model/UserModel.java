package org.example.cashcraftbackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserModel {
    private String userFirstName;
    private String userLastName;
    private String userName;
    private String userPassword;
    private String userMatchingPassword;
}
