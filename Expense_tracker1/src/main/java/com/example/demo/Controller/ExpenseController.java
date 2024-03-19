package com.example.demo.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Dto.ExpenseDto;
import com.example.demo.Service.ExpenseService;



@CrossOrigin("*")
@RestController
@RequestMapping("/api/expense")
public class ExpenseController {

	private ExpenseService expenseService;
	
	public ExpenseController(ExpenseService expenseService) {
		super();
		this.expenseService = expenseService;
	}
	
	@PostMapping
	public ResponseEntity<ExpenseDto> addExpense(@RequestBody ExpenseDto expenseDto){
		return new ResponseEntity<>(expenseService.addExpense(expenseDto),HttpStatus.CREATED);
	}
	
	@GetMapping
	public ResponseEntity<List<ExpenseDto>> getAllExpenses(){
		List<ExpenseDto> expense=expenseService.getAllExpense();
		return ResponseEntity.ok(expense);
	}
	
	@PostMapping("/{id}")
	public ResponseEntity<ExpenseDto> updateProduct( @PathVariable("id") long id, @RequestBody ExpenseDto expenseDto){
		return new ResponseEntity<>(expenseService.updateExpense( id,expenseDto),HttpStatus.OK);
	
   }
	
	@GetMapping("/{id}")
	public ResponseEntity<Map<String, String>> deleteById(@PathVariable("id") long id) {
        try {
            expenseService.deleteExpense(id);
            Map<String, String> response = new HashMap<>();
            response.put("message", "Expense Deleted Successfully");
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Error deleting entity: " + e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}







