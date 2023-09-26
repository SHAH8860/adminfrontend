import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../Service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private AuthService:AuthServiceService,private route: Router){}
  canActivate():boolean{
    if(this.AuthService.loginIn()){
      return true
    }
    else{
      this.route.navigate(["/login"])
      return false
    }
  }

  }
