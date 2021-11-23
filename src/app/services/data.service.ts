import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  data:any = {
    1000:{accno:1000,uname:"neer",password:1000,balance:56666},
    1001:{accno:1001,uname:"neer",password:1001,balance:56666},
    1002:{accno:1002,uname:"neer",password:1002,balance:56666}
  }

  constructor() { }
  register(accno:any,uname:any,password:any)
{let database=this.data

if(accno in database){
  return false
}
else{
  database[accno]={
    accno,
    uname,
    password,
    balance:0
  }
  return true
}
}
login(accno:any,pwd:any){


  let database=this.data
 
  if(accno in database){
    if(pwd==database[accno]["password"]){
      return true
    }
    else{
      alert("incorrect password")
      return false
    }
  }
  else{
    alert("invalid account number")
    return false
  }
}
}