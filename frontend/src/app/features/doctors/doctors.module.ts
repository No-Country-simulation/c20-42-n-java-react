import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoctorsComponent} from './components/doctors/doctors.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    DoctorsComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FaIconComponent
    ]
})
export class DoctorsModule {}
