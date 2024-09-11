import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  registroForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      dni: ['', Validators.required],
      telefono: ['', Validators.required],
      fechaNacimiento: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registroForm.valid) {
      console.log('Usuario registrado:', this.registroForm.value);
      // Aquí puedes agregar la lógica para enviar los datos a tu backend
    }
  }
}
