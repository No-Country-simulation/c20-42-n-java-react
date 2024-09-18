import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PacientesComponent} from "./pacientes/pacientes.component";
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    PacientesComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class PacientesModule { }
