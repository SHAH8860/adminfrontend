import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthServiceService } from 'src/app/Service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public LoginUser:FormGroup|any
  constructor(private form:FormBuilder,private AuthService:AuthServiceService,private route:Router){
    this.LoginUser=this.form.group({
      Email:["",Validators.required],
      Password:["",Validators.required]
    })

  }

  ngOnInit(): void {

  }


  UserLogin(){
    let data={
      "email":this.LoginUser.value.Email,
      "password":this.LoginUser.value.Password

    }
    console.log(data)
    this.AuthService.UserLogin(data).subscribe((res:any)=>{
      localStorage.setItem('token',res.token)
      this.route.navigate(["/admin"])

    })


    this.LoginUser.reset()

  }

}
