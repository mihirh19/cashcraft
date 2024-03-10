package org.example.cashcraftbackend.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.cashcraftbackend.entity.User;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GroupModel {
    private String grpName;
    private String grpType;
    private Long   grpBudget;
    private List<User> grpUser;
}
