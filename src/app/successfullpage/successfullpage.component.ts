import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successfullpage',
  templateUrl: './successfullpage.component.html',
  styleUrls: ['./successfullpage.component.css']
})
export class SuccessfullpageComponent implements OnInit {
  name:string="";
  total:number=0;
  constructor() { }

  ngOnInit(): void {
    this.name=localStorage.getItem("name")||"";
    this.total=JSON.parse(localStorage.getItem("total")||"");
  }

}
