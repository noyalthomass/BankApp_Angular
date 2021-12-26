import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  exp = 'bank';
  acno = 'account number please';
  accno = '';
  pwd = '';
  loginForm=this.fb.group({
    accno:["",[Validators.required,Validators.pattern('[0-9]*')]],
    pwd:["",[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private routerLogin: Router, private ds: DataService,private fb:FormBuilder) {}

  ngOnInit(): void {}

  acnoChange(event: any) {
    this.accno = event.target.value;
    console.log(this.accno);
  }

  pwdChange(event: any) {
    this.pwd = event.target.value;
    console.log(this.pwd);
  }

  login() {
    var acno = this.loginForm.value.accno;

    var pswd = this.loginForm.value.pwd;
    if(this.loginForm.valid){
      this.ds.login(acno, pswd)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          localStorage.setItem("currentUser",JSON.stringify(result.currentUser))
          localStorage.setItem("currentAcno",JSON.stringify(result.currentAcno))
          localStorage.setItem("token",JSON.stringify(result.token))
          this.routerLogin.navigateByUrl("home")
        }
      },
      (result:any)=>{
        alert(result.error.message)
        this.routerLogin.navigateByUrl('')
      }
      )
    }
    else{
      alert("invalid form")
    }

  }
}
