import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../service/api.service'; 
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  description:any;

  constructor(private api: ApiService,  @Inject(MAT_DIALOG_DATA) public showData:any) { }

  ngOnInit(): void {
    this.description=this.showData;
  }

}
