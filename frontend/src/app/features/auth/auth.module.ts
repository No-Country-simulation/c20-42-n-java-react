import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterDoctorComponent } from './register-doctor/register-doctor.component';
import { AppRoutingModule } from '../../app-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegisterDoctorComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
