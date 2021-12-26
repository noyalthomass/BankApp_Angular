import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { hostViewClassName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { debounceTime } from 'rxjs';

const options ={
  headers : new HttpHeaders()
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  currentUser = '';
  currentAcno='';
  data: any = {
    1000: { accno: 1000, uname: 'neer', password: 1000, balance: 56666,transaction:[] },
    1001: { accno: 1001, uname: 'amal', password: 1001, balance: 56666,transaction:[] },
    1002: { accno: 1002, uname: 'jay', password: 1002, balance: 56666,transaction:[] },
  };

  constructor(private http:HttpClient) {
    // this.getDetails();
  }
  getTransaction(accno:any){
    const data={
      accno
    }
    return this.http.post('http://localhost:3000/getTransaction',data,this.getOptions())
  }
  saveDetails() {
    if (this.data) {
      localStorage.setItem('data', JSON.stringify(this.data));
    }
    if (this.currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    }
    if(this.currentAcno){
      localStorage.setItem('currentAcno', JSON.stringify(this.currentAcno))
    }
  }

  getDetails() {
    if (localStorage.getItem('data')) {
      this.data=JSON.parse(localStorage.getItem('data') || '');
    }
    if (localStorage.getItem('currentUser')) {
      this.currentUser=JSON.parse(localStorage.getItem('currentUser') || '');
    }
    if(localStorage.getItem('currentAcno')){
      this.currentAcno=JSON.parse(localStorage.getItem('currentAcno') || '')
    }
  }
  register(accno: any, uname: any, password: any) {

     const data = {
        accno,
        uname,
        password
      }

      //server call -registerAPI
 return this.http.post('http://localhost:3000/register',data)
  }
  login(accno: any, pwd: any) {
    const data = {
      accno,
      pwd
    }

    //server call -loginAPI
return this.http.post('http://localhost:3000/login',data)
  }

  getOptions(){
    const token =JSON.parse(localStorage.getItem("token") || '')
    
    //request header creation
    let headers=new HttpHeaders()
    if(token){
      headers=headers.append('x-access-token',token)
      options.headers=headers
    }
    
    return options
    
  }
  deposit(accno: any, pwd: any, amount: any) {
    const data = {
      accno,
      pwd,
      amount
    }

    //server call -registerAPI
return this.http.post('http://localhost:3000/deposit',data,this.getOptions())
  }
  withdraw(accno: any, pwd: any, amount: any) {
    const data = {
      accno,
      pwd,
      amount
    }

    //server call -registerAPI
return this.http.post('http://localhost:3000/withdraw',data,this.getOptions())
  }
}
