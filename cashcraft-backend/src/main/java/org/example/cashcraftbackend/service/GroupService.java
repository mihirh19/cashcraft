package org.example.cashcraftbackend.service;


import org.example.cashcraftbackend.entity.Expense;
import org.example.cashcraftbackend.entity.FinalSplit;
import org.example.cashcraftbackend.entity.Group;
import org.example.cashcraftbackend.entity.User;
import org.example.cashcraftbackend.model.GroupModel;

import java.util.List;

public interface GroupService {
    Group createGroup(GroupModel groupModel);

    Group getGroupById(Long groupId);

    List<User> addUser(Long grpId, List<User> user);

    List<User> getGroupUsers(Long groupId);

    List<Expense> getGroupExpenses(Long groupId);

    List<FinalSplit> getGroupFinal(Long groupId);

    String deleteGroup(Long groupId);
}
