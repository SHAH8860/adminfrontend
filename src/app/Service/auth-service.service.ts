import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }
  url="localhost:8000/admin"

  RegisteredUser(payload:any){
    return this.http.post<any>(`${this.url}/register`,payload)
  }
  
  UserLogin(user:any){
    return this.http.post<any>(`${this.url}/login`,user)
  }


}
