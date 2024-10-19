import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { UsuarioControllerService } from '../../../core/services/api-client/services/usuario-controller.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  registroForm!: FormGroup;
  credentialError: string = ''; // Mensaje de error más específico
  isLoading: boolean = false; // Indicador de carga

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private usuarioService: UsuarioControllerService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.registroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.registroForm.valid) {
      this.isLoading = true; // Activar indicador de carga
      this.credentialError = ''; // Limpiar mensajes de error previos

      const { email, password } = this.registroForm.value;

      this.authService.login(email, password).subscribe({
        next: () => {
          this.usuarioService.obtenerUsuario().subscribe({
            next: (backendUser) => {
              localStorage.setItem('usuario', JSON.stringify(backendUser));
              this.router.navigateByUrl('/');
              this.isLoading = false; // Desactivar el indicador de carga
            },
            error: (err) => {
              this.isLoading = false;
              console.error('Error obteniendo usuario:', err);
            },
          });
        },
        error: (err) => {
          this.isLoading = false;
          if (err.code === 'auth/invalid-credential') {
            this.credentialError = 'Credenciales inválidas. Verifica tu email y contraseña.';
          } else {
            this.credentialError = 'Ocurrió un error inesperado. Inténtalo de nuevo.';
          }
        },
      });
    }
  }
}
