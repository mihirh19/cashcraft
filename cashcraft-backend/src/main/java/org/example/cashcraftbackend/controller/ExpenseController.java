package org.example.cashcraftbackend.controller;

import org.example.cashcraftbackend.entity.Expense;
import org.example.cashcraftbackend.model.ExpenseModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.example.cashcraftbackend.service.ExpenseService;

import java.util.List;

@RestController
@RequestMapping("/expense")
@CrossOrigin
public class ExpenseController {

    @Autowired
    private ExpenseService expenseService;

    @PostMapping("/create")
    public Expense createExpense(@RequestBody ExpenseModel expenseModel){

        return expenseService.createExpense(expenseModel);
    }
    @GetMapping("/group/{id}")
    public List<Expense> getGrpExpenses(@PathVariable("id") Long groupId){
        return expenseService.getGrpExpenses(groupId);
    }
    @GetMapping("/resolve/{id}")
    public String resolveExpense(@PathVariable("id") Long expId){
        return expenseService.resolveExpense(expId);
    }
}
