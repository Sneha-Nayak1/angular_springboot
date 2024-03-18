import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from '../service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContentComponent } from '../content/content.component';
import { FormComponent } from '../form/form.component';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})




export class ExpenseComponent implements OnInit {

  totalSum: number = 0;
  income: number = 0;
  savedAmount: number = 0;
  data:any;
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
        this.sum();
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

  sum() {
    this.totalSum = this.dataSource.data.reduce((total, current) => total + current.price, 0);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
