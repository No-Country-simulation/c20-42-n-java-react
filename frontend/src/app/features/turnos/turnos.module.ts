import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurnosComponent } from './components/turnos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TurnosComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class TurnosModule {}
