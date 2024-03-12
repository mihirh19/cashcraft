package org.example.cashcraftbackend.service;

import com.amazonaws.services.dynamodbv2.xspec.S;
import org.example.cashcraftbackend.entity.Expense;
import org.example.cashcraftbackend.model.ExpenseModel;
import org.example.cashcraftbackend.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
public class ExpenseServiceImp implements ExpenseService {

    @Autowired
    private ExpenseRepository expenseRepository;

    @Override
    public Expense createExpense(ExpenseModel expenseModel) {
        Expense expense = new Expense();
        expense.setExpName(expenseModel.getExpName());
        expense.setExpAmt(expenseModel.getExpAmt());
        expense.setUsrSplitBtw(expenseModel.getUsrSplitBtw());
        expense.setExpPaidBy(expenseModel.getExpPaidBy());
        expense.setExpGrp(expenseModel.getExpGrp());
        expenseRepository.save(expense);
        return expense;
    }

    @Override
    public List<Expense> getGrpExpenses(Long groupId) {
        return null;
    }

    @Override
    public HashMap<String, String > resolveExpense(Long expId) {
        expenseRepository.deleteById(expId);
        HashMap<String, String >map = new HashMap<>();
        map.put("message", "expense resolved");
        return map;

    }
}
