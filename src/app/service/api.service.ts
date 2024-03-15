import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url='http://localhost:8080/api/expenses';
  constructor(public http:HttpClient) { }

  getExpenses(){
    return this.http.get(`${this.url}`);
  }
   
  postExpense(data:any){
    return this.http.post(`${this.url}`,data);
  }

  putExpense(data:any, id:number){
    return this.http.post(`${this.url}/${id}`,data);

  }

  deleteExpense(id:any){
    return this.http.get(`${this.url}/${id}`);
  }


}
