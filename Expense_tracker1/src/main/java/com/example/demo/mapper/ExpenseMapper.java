package com.example.demo.mapper;

import com.example.demo.Dto.ExpenseDto;
import com.example.demo.Entity.Expense;

public class ExpenseMapper {
	
	public static Expense mapToExpense(ExpenseDto expensedto) {
		Expense expense=new Expense(expensedto.getId(),
									expensedto.getProductType(),
									expensedto.getProductName(),
									expensedto.getDate(),
									expensedto.getPrice(),
									expensedto.getContent());
		return expense;
	}
	
	public static ExpenseDto mapToExpenseDto(Expense expense) {
		ExpenseDto expenseDto=new ExpenseDto(expense.getId(),
									expense.getProductType(),
									expense.getProductName(),
									expense.getDate(),
									expense.getPrice(),
									expense.getContent());
		return expenseDto;
	}

}
