import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    depositeForm=this.fb.group({
      acno:["",[Validators.required,Validators.pattern('[0-9]*')]],
      pswd:["",[Validators.required,Validators.pattern('[0-9]*')]],
      amount:["",[Validators.required,Validators.pattern('[0-9]*')]]
    })
    withdrawForm=this.fb.group({
      acno1:["",[Validators.required,Validators.pattern('[0-9]*')]],
      pswd1:["",[Validators.required,Validators.pattern('[0-9]*')]],
      amount1:["",[Validators.required,Validators.pattern('[0-9]*')]]
    })
    user:any
  constructor(private ds:DataService,private fb:FormBuilder) { 
    this.user=JSON.parse(localStorage.getItem('currentUser') || '')
  }

  ngOnInit(): void {
  }
  deposit(){
    var acno=this.depositeForm.value.acno;
    var pswd=this.depositeForm.value.pswd;
    var amt=this.depositeForm.value.amount
    if(this.depositeForm.valid){
      this.ds.deposit(acno,pswd,amt)
      .subscribe((result:any)=>{
        if(result){
            alert(result.message)
        }
      },
      (result)=>{
        alert(result.error.message)
      }
      )
    }

  else{
    alert("Invalid form")
  }
  }
  withdraw(){
    var acno1=this.withdrawForm.value.acno1;
    var pswd1=this.withdrawForm.value.pswd1;
    var amt1=this.withdrawForm.value.amount1
    if(this.withdrawForm.valid){
      this.ds.withdraw(acno1,pswd1,amt1)
      .subscribe((result:any)=>{
        if(result){
            alert(result.message)
        }
      },
      (result)=>{
        alert(result.error.message)
      }
      )
    }

  else{
    alert("Invalid form")
  }
  }
}
