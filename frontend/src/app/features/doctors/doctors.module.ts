import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoctorsComponent} from './components/doctors/doctors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DoctorsComponent
  ],
  imports: [
    CommonModule,
    FormsModule ,
    ReactiveFormsModule
  ]
})
export class DoctorsModule {}
