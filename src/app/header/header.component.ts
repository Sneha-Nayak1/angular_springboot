import { Component, OnInit, ViewChild , Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { ApiService } from '../service/api.service';
// import { ExpenseComponent } from '../expense/expense.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

 
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog,private api: ApiService,
   ) { }
//  @Inject(ExpenseComponent) private expenseComponent: ExpenseComponent
  ngOnInit(): void {
  }



  openDialog() {
    this.dialog.open(FormComponent, {
      width:"30%",
      height:'80%'
    })
  }
}
  //   .afterClosed().subscribe(
  //     val=>{
  //       if(val=='save'){
  //         this.expenseComponent.getAllExpenses();
  //       }
  //     }
  //   )
  //  }

