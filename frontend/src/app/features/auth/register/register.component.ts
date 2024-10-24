import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth/auth.service';
import {Router} from '@angular/router';
import {PacienteControllerService, UsuarioControllerService} from "../../../core/services/api-client";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  registroForm!: FormGroup;
  emailInUse: boolean = false; // Nueva propiedad para manejar el error del email en uso

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private usuarioService: UsuarioControllerService,
    private pacienteService: PacienteControllerService
  ) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.registroForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
        telefono: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
        edad: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      },
      {validator: this.passwordMatchValidator} // <-- Aquí se aplica el validador
    );
  }

  // Validador para confirmar que la contraseña y la confirmación sean iguales
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : {mismatch: true};
  }

  onSubmit(): void {
    if (this.registroForm.valid) {
      const controls = this.registroForm.controls;
      this.authService
        .register(
          controls['username'].value,
          controls['email'].value,
          controls['password'].value
        )
        .subscribe({
          next: () => {
            this.pacienteService
              .crearPaciente({
                  persona: {
                    dni: controls['dni'].value,
                    edad: controls['edad'].value,
                    email: controls['email'].value,
                    nombre: controls['username'].value,
                    telefono: controls['telefono'].value
                  }
                }
              )
              .subscribe({
                next: (paciente) => {
                  this.usuarioService
                    .crearUsuario({
                      rol: 'PACIENTE',
                      email: controls['email'].value,
                      entidadId: paciente.id
                    })
                    .subscribe({
                      next: (backendUser) =>
                        localStorage.setItem(
                          'usuario',
                          JSON.stringify(backendUser)
                        ),
                      error: (err) => console.log(err),
                    });
                },
                error: (err) => console.log(err),
              });
            this.router.navigate(['']);
          },
          error: (err) => {
            if (err.code === 'auth/email-already-in-use') {
              // Si el email ya está en uso, establecer la propiedad a true
              this.emailInUse = true;
            }
          },
        });
    }
  }
}
