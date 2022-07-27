import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name:string="";
  address:string="";
  creditcard:string="";
  @Input() total:number=0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onsubmit(){
    if(this.name.length<3){
      alert(" name must be minimum 3 characters")
    }else if(this.address.length<6){
      alert("address must be minimum 6 characters")
    }else if(this.creditcard.length!=16||!Number(this.creditcard)){
      alert("creditcard must be 16-digit number")
    }else{
      localStorage.setItem("name",this.name);
      localStorage.setItem("total",this.total.toString());
      this.router.navigate(['/success'])
    }
  }

}
