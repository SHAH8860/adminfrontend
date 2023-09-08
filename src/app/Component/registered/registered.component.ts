import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {
  public registeredUser:FormGroup|any;
  constructor( private form:FormBuilder){

  }
  ngOnInit(): void {
    
  }

  UserRegistration(){
    
  }

}
