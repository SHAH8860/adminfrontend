import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisteredComponent } from './Component/registered/registered.component';
import { AdminComponent } from './Component/admin/admin.component';
import { HeaderComponent } from './Component/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthServiceService } from './Service/auth-service.service';
import { JWTInterceptor } from './Interceptor/jwt.interceptor';
import { AuthGuard } from './Guard/auth-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisteredComponent,
    AdminComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,


  ],
  providers: [AuthServiceService,AuthGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: JWTInterceptor,
    multi:true

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
