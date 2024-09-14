import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../../core/services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  registroForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      //TODO: VER COMO HACER PARA QUE TODOS LOS DATOS SEAN REQUERIDOS ASI SE PERSISTE EL USUARIO Y LA PERSONA/DOCTOR/PACIENTE
      //dni: ['', Validators.required],
      //telefono: ['', Validators.required],
      //fechaNacimiento: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registroForm.valid) {
      const controls = this.registroForm.controls;
      this.authService.register(controls['username'].value, controls['email'].value, controls['password'].value, 'PACIENTE').subscribe({
        next: result => {
          console.log('Paciente registrado:', this.registroForm.value);
          this.router.navigate(['']);
        },
        error: err => console.log(err)
      })
    }
  }

}
