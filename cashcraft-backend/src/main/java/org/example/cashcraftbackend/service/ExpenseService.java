package org.example.cashcraftbackend.service;



import org.example.cashcraftbackend.entity.Expense;
import org.example.cashcraftbackend.model.ExpenseModel;

import java.util.List;


public interface ExpenseService {
    Expense createExpense(ExpenseModel expenseModel);

    List<Expense> getGrpExpenses(Long groupId);

    String resolveExpense(Long expId);
}
