import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/Service/auth-service.service';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {
   registeredUser: FormGroup|any;
  constructor( private form:FormBuilder,private AuthService:AuthServiceService){}
  ngOnInit(): void {
    this.registeredUser=this.form.group({
      Email:["",Validators.required],
      Password:["",Validators.required]
    })
    
  }

  get Email(){
    return this.registeredUser.get("Email")
  }
  get Password(){
    return this.registeredUser.get("Password")
  }

  UserRegistration(){
    console.log("this.registeredUser.value.Email",this.registeredUser.value.Email)
    let data={
      AdminEmail:this.registeredUser.value.Email,
      AdminPassword:this.registeredUser.value.Password
    }
    console.log(data)
    this.AuthService.RegisteredUser(data).subscribe((res:any)=>{
      console.log("Registered",res)
    })
    this.registeredUser.reset()
    
  }

}
