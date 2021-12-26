import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname=""
  acno=""
  pswd=""
   registerForm=this.fb.group({
     uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
     acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
     pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9@]*')]]
   })
  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    var uname=this.registerForm.value.uname
    var accno=this.registerForm.value.acno
    var pwd=this.registerForm.value.pswd
if(this.registerForm.valid){
  this.ds.register(accno,uname,pwd)
  .subscribe((result:any)=>{
    if(result){
      alert(result.message)
      this.router.navigateByUrl("")
    }
  },
  (result:any)=>{
    alert(result.error.message)
    this.router.navigateByUrl('')
  }
  )
}   
   
else{
  alert("invalid form")
}
    
  }

}
