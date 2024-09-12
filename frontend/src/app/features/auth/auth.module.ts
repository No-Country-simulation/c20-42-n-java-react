import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { RegisterDoctorComponent } from './register-doctor/register-doctor.component';
import { AppRoutingModule } from '../../app-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegisterDoctorComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AuthModule { }
