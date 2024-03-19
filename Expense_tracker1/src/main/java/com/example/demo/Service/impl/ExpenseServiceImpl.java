package com.example.demo.Service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.demo.Dto.ExpenseDto;
import com.example.demo.Entity.Expense;
import com.example.demo.Repository.ExpenseRepository;
import com.example.demo.Service.ExpenseService;
import com.example.demo.mapper.ExpenseMapper;


@Service
public class ExpenseServiceImpl implements ExpenseService{
	
	private ExpenseRepository expenseRepository;
	
	public ExpenseServiceImpl(ExpenseRepository expenseRepository) {
		super();
		this.expenseRepository = expenseRepository;
	}

	@Override
	public ExpenseDto addExpense(ExpenseDto expenseDto) {
		Expense expense=ExpenseMapper.mapToExpense(expenseDto);
		Expense saved=expenseRepository.save(expense);
		return ExpenseMapper.mapToExpenseDto(saved);
	}

	@Override
	public List<ExpenseDto> getAllExpense() {
		List<Expense> expense=expenseRepository.findAll();
		return expense.stream().map((e)->ExpenseMapper.mapToExpenseDto(e)).collect(Collectors.toList());
		
	}

	@Override
	public ExpenseDto updateExpense(long id, ExpenseDto expenseDto) {
		Expense expense=expenseRepository.findById(id).orElseThrow(()->new RuntimeException("not found"));
		expense.setProductName(expenseDto.getProductName());
		expense.setProductType(expenseDto.getProductType());
		expense.setDate(expenseDto.getDate());
		expense.setPrice(expenseDto.getPrice());
		expense.setContent(expenseDto.getContent());
		Expense saved=expenseRepository.save(expense);		
		return ExpenseMapper.mapToExpenseDto(saved);
	}
	

	
	
	

	@Override
	public void deleteExpense(long id) {
		Expense expense=expenseRepository.findById(id).orElseThrow(()->new RuntimeException("Id not found"));
		expenseRepository.deleteById(id);
		
	}

}
