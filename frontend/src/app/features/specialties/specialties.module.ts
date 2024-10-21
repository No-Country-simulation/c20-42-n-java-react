import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpecialtiesComponent} from './components/specialties/specialties.component';
import {SpinnerComponent} from "../../shared/components/spinner/spinner.component";


@NgModule({
  declarations: [
    SpecialtiesComponent
  ],
  imports: [
    CommonModule,
    SpinnerComponent
  ]
})
export class SpecialtiesModule { }
