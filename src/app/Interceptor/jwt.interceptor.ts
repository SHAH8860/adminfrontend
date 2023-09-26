import { Injectable,Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../Service/auth-service.service';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

  constructor(private injector:Injector) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let auth=this.injector.get(AuthServiceService)
    let tokennizedrequest=request.clone({
      setHeaders:{
        Authorization:`Bearer ${auth.gettoken()}`
      }
    })
    return next.handle(tokennizedrequest);
  }
}
