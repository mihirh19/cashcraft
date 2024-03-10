package org.example.cashcraftbackend.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.cashcraftbackend.entity.Group;
import org.example.cashcraftbackend.entity.User;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ExpenseModel {
    private String expName;
    private Long expAmt;
    private Long expPaidBy;
    private List<User> usrSplitBtw;
    private Group expGrp;
}
