import { Component, OnInit , Inject} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { ApiService } from '../service/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  actionBtn:string='Save';

 

  details !:FormGroup; 
  constructor(private api:ApiService, private formBuilder:FormBuilder,
    private dialogRef:MatDialogRef<FormComponent>,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public edit:any)
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

      if(this.edit){
        this.actionBtn='Update'
        this.details.controls['productType'].setValue(this.edit.productType);
        this.details.controls['productName'].setValue(this.edit.productName);
        this.details.controls['price'].setValue(this.edit.price);
        this.details.controls['date'].setValue(this.edit.date);
        this.details.controls['content'].setValue(this.edit.content);
      }

  }

  addExpense(){
    if(!this.edit){
      if(this.details.valid){
      
        this.api.postExpense(this.details.value).subscribe(
          {
            next: (res)=>{
              console.log("added")
              this.openSnackBar('Details Saved')
               this.details.reset(),
               this.dialogRef.close('save');
            },
            error:()=>
            console.log("error while adding")
          }
        )
        
      }

    }
    else{
      this.updateProduct()
    }
   
    
  }

  updateProduct(){
    this.api.putExpense(this.details.value, this.edit.id).subscribe({
      next: (res)=>{
        this.openSnackBar('Details updated successfully')
        this.details.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("updating error")
      }
      
    })

  }
  openSnackBar(message: string) {
    this._snackBar.open(message,'', {
      duration:2000,
    });
  }

}
