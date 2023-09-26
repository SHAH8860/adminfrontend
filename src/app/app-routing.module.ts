import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { RegisteredComponent } from './Component/registered/registered.component';
import { AdminComponent } from './Component/admin/admin.component';
import { AuthGuard } from './Guard/auth-guard.guard';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisteredComponent},
  {path:"admin",component:AdminComponent,
  canActivate:[AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
