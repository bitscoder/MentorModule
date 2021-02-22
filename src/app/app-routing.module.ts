import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { SignupComponent } from './signup/signup.component';
import {EmployeelistComponent} from './employeelist/employeelist.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Signup', component: SignupComponent },
  { path: 'Employeelist', component: EmployeelistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
