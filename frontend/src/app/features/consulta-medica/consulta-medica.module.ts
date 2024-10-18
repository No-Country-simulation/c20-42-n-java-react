import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaMedicaComponent } from './components/consulta-medica.component';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, AppRoutingModule, ReactiveFormsModule],
})
export class ConsultaMedicaModule {}
