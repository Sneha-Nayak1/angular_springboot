package com.example.demo.Service;

import java.util.List;

import com.example.demo.Dto.ExpenseDto;


public interface ExpenseService {
	ExpenseDto addExpense(ExpenseDto expenseDto);
	List<ExpenseDto> getAllExpense();
	ExpenseDto updateExpense(long id, ExpenseDto expenseDto);
	void deleteExpense(long id);
	
}
