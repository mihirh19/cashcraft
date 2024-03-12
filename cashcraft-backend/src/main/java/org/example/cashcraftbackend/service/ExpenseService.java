package org.example.cashcraftbackend.service;



import org.example.cashcraftbackend.entity.Expense;
import org.example.cashcraftbackend.model.ExpenseModel;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


public interface ExpenseService {
    Expense createExpense(ExpenseModel expenseModel);

    List<Expense> getGrpExpenses(Long groupId);

    HashMap<String, String> resolveExpense(Long expId);
}
