import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/Service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public LoginUser:FormGroup|any
  constructor(private form:FormBuilder,private AuthService:AuthServiceService){

  }

  ngOnInit(): void {
    this.LoginUser=this.form.group({
      Email:["",Validators.required],
      Password:["",Validators.required]
    })
    
  }
  

  UserLogin(){
    let data={
      email:this.LoginUser.value.Email,
      password:this.LoginUser.value.Password

    }
    console.log(data)
    this.AuthService.UserLogin(data).subscribe((res:any)=>{
      console.log("Login",res)
    })
    
    this.LoginUser.reset()

  }

}
