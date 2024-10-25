import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoctorsComponent} from './components/doctors/doctors.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {SpinnerComponent} from "../../shared/components/spinner/spinner.component";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    DoctorsComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FaIconComponent,
        SpinnerComponent,
        RouterLink
    ]
})
export class DoctorsModule {}
