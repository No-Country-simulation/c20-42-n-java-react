import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {SpecialtiesComponent} from './components/specialties/specialties.component';


@NgModule({
  declarations: [
    SpecialtiesComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ]
})
export class SpecialtiesModule { }
