import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient,private route:Router) { }
  mainurl='http://localhost:8000/admin'

  RegisteredUser(payload:any){
    return this.http.post(`${this.mainurl}/register`,payload)
  }

  UserLogin(user:any){
    return this.http.post(`${this.mainurl}/login`,user)
  }

  GetAllldata(){
    let aurl="http://localhost:8000/admin/all"
    return this.http.get(aurl)
  }
  loginIn(){
    return !!localStorage.getItem("token")
  }
  gettoken(){
    return localStorage.getItem("token")
  }
  logout(){
    localStorage.removeItem("token")
    this.route.navigate(['/login'])

    }


}
