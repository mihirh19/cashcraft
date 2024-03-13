package org.example.cashcraftbackend.controller;

import org.example.cashcraftbackend.entity.Expense;
import org.example.cashcraftbackend.entity.FinalSplit;
import org.example.cashcraftbackend.entity.Group;
import org.example.cashcraftbackend.entity.User;
import org.example.cashcraftbackend.model.GroupModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.example.cashcraftbackend.service.GroupService;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/groups")
@CrossOrigin
public class GroupController {

    @Autowired
    private GroupService groupService;

    @PostMapping("/create")
    public Group createGroup(@RequestBody GroupModel groupModel){

        return groupService.createGroup(groupModel);
    }

    @PostMapping("/adduser/{id}")
    public List<User> addUser(@PathVariable("id") Long GrpId, @RequestBody List<User> user){
        return groupService.addUser(GrpId, user);
    }


    @GetMapping("/{id}")
    public Group getGroupById(@PathVariable("id") Long GroupId ){
        return groupService.getGroupById(GroupId);
    }

    @GetMapping("/users/{id}")
    public List<User> getGroupUsers(@PathVariable("id") Long GroupId){
        return groupService.getGroupUsers(GroupId);
    }

    @GetMapping("/expenses/{id}")
    public List<Expense> getGroupExpenses(@PathVariable("id") Long groupId){
        return groupService.getGroupExpenses(groupId);
    }

    @GetMapping("/finalsplit/{id}")
    public List<FinalSplit> getGroupFinal(@PathVariable("id") Long groupId){
        return groupService.getGroupFinal(groupId);
    }

    @DeleteMapping("/{id}")
    public HashMap<String,String> deleteGroup(@PathVariable("id") Long groupId){
        return groupService.deleteGroup(groupId);
    }
}
