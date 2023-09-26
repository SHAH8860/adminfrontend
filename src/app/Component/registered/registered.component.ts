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
  constructor( private form:FormBuilder,private AuthService:AuthServiceService){
    this.registeredUser=this.form.group({
      Email:["",Validators.required],
      Password:["",Validators.required]
    })
  }
  ngOnInit(): void {
    this.getdata()


  }

  get Email(){
    return this.registeredUser.get("Email")
  }
  get Password(){
    return this.registeredUser.get("Password")
  }

  UserRegistration(){
    let data={
      "AdminEmail":this.registeredUser.value.Email,
      "AdminPassword":this.registeredUser.value.Password
    }
    console.log(data)
    this.AuthService.RegisteredUser(data).subscribe((res:any)=>{
      localStorage.setItem('token',res.token)

    })

    this.registeredUser.reset()

  }
  getdata(){
    this.AuthService.GetAllldata().subscribe((res:any)=>{
      console.log("ressssss",res)
    })
  }

}
