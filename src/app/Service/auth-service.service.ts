import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }
  url="http://localhost:8000/admin"

  RegisteredUser(payload:any){
    return this.http.post(`${this.url}/register`,JSON.stringify(payload))
  }
  
  UserLogin(user:any){
    return this.http.post(`${this.url}/login`,JSON.stringify(user))
  }


}
