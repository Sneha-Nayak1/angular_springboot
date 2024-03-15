import { Component, OnInit , Inject} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { ApiService } from '../service/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  actionBtn:string='Save';

  details !:FormGroup; 
  constructor(private api:ApiService, private formBuilder:FormBuilder,
    private dialogRef:MatDialogRef<FormComponent>)
    // private dialogRef:MatDialogRef<ExpenseComponent>)
     { }

  ngOnInit(): void {
    this.details=this.formBuilder.group(
      {
        productType:['',Validators.required],
        productName:['', Validators.required],
        date:['',Validators.required],
        price:['',Validators.required],
        content:['']
      }
    )
  }

  addExpense(){
    console.log('1st')
    if(this.details.valid){
      console.log('2nd')
      this.api.postExpense(this.details.value).subscribe(
        {
          next: (res)=>{
            console.log("added")
            // this.details.reset(),
            // this.dialogRef.close('save');
          },
          error:()=>
          console.log("error while adding")
        }
      )
      
    }
  }

}
