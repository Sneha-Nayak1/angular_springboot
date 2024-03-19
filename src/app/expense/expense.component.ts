import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from '../service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContentComponent } from '../content/content.component';
import { FormComponent } from '../form/form.component';
import { NgForm, Validators } from '@angular/forms';
import { FormGroup,FormControl, Validator } from '@angular/forms';


@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})




export class ExpenseComponent implements OnInit {

  totalSum: number = 0;
  totalincome!:number;
  saving: number=0;
  data:any;
  


  submitIncome= new FormGroup({
    income: new FormControl('',[Validators.pattern('[0-9]+')])
  })
  displayedColumns: string[] = ['productType', 'productName', 'date', 'price', 'content'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  ;

  constructor(private dialog: MatDialog, private api: ApiService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllExpenses();
  
  }

  submit(dataa:NgForm){
    this.data=dataa;
  }
  
  openDialog() {
    this.dialog.open(FormComponent, {
      width:"30%",
      height:'80%'
    }) .afterClosed().subscribe(
          val=>{
            if(val=='save'){
              this.getAllExpenses();
            }
          }
        )
       }
  
  getAllExpenses() {
    this.api.getExpenses().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.expenditure();
       
      },
      error: () => {
        alert("Error fetching data");
      }
    });
  }


  updateExpense(row:any){
    this.dialog.open(FormComponent,{
      width:"30%",
      height:'80%',
      data:row,
    }).afterClosed().subscribe(
      val=>{
        if(val=='update'){
          this.getAllExpenses();
         
        }
      }
    )
  }
  deleteExpense(id:any){
    console.log('Deleting product with id:', id);
    this.api.deleteExpense(id).subscribe(
      {
        next: res=>{
          this.getAllExpenses();
        }
      }
    )
  }

  expenditure() {
    this.totalSum = this.dataSource.data.reduce((total, current) => total + current.price, 0);
     this.saved();
  }

  income(){
   this.totalincome=this.submitIncome.value.income;
   this.saved();
  }


  saved(){
    
    if (this.totalincome !== undefined && this.totalSum !== undefined && this.totalSum<this.totalincome) {
      
    this.saving=this.totalincome-this.totalSum;
    }
  }


  
}
