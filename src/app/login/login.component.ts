import { Component, OnInit } from '@angular/core';
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

  constructor(private routerLogin: Router, private ds: DataService) {}

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
    var acno = this.accno;

    var pswd = this.pwd;

    var result = this.ds.login(acno, pswd);

    if (result) {
      alert('login successfull');
      this.routerLogin.navigateByUrl('home');
    }
  }
}
