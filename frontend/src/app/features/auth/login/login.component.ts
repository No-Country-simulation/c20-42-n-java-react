import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../../core/services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  registroForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registroForm.valid) {
      const controls = this.registroForm.controls;

      this.authService.login(controls['email'].value, controls['password'].value).subscribe(
        response => {
          console.log('Login exitoso:', response);
          this.router.navigate(['/']); // Redirigir al home o a la página deseada
        },
        error => {
          console.error('Error en el login:', error);
          alert('Error de autenticación: ' + error.message);
        }
      );
    }
  }


}
