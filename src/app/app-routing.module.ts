import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "Register", component: RegisterComponent },
  { path: "AdminLogin", component: LoginComponent },
  { path: "ForgotPassword", component: ForgotComponent },
  { path: "Home", component: HomepageComponent },
  { path: "Contact", component: ContactpageComponent },
  { path: "**", component: ErrorpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
