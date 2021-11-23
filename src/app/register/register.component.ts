import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user=""
  accno=""
  pwd=""
  
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    var uname=this.user
    var accno=this.accno
    var pwd=this.pwd

    var result=this.ds.register(accno,uname,pwd)
    if(result){
      alert("created")
      this.router.navigateByUrl("")
    }
    else{
      alert("acc already exist")
    }
  }

}
