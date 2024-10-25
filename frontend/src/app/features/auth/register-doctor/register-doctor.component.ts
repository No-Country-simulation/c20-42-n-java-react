import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth/auth.service';
import {Router} from '@angular/router';
import {
  DoctorControllerService,
  Especialidad,
  EspecialidadControllerService,
  UsuarioControllerService
} from "../../../core/services/api-client";

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrl: './register-doctor.component.css',
})
export class RegisterDoctorComponent implements OnInit {
  registroForm!: FormGroup;
  especialidades!: Especialidad[];
  emailInUse: boolean = false; // Nueva propiedad para manejar el error del email en uso

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private usuarioService: UsuarioControllerService,
    private doctorService: DoctorControllerService,
    private especialidadesService: EspecialidadControllerService
  ) {
  }

  ngOnInit(): void {
    this.initializeForm();

    this.especialidadesService.obtenerEspecialidad().subscribe({
      next: (especialidades) => (this.especialidades = especialidades),
    });
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
        edad: [
          '',
          [Validators.required, Validators.min(18), Validators.max(100)],
        ],
        licencia: ['', Validators.required],
        especialidad: ['', Validators.required],
      },
      {validators: this.passwordMatchValidator}
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
            this.doctorService
              .crearDoctor({
                persona: {
                  dni: controls['dni'].value,
                  edad: controls['edad'].value,
                  email: controls['email'].value,
                  nombre: controls['username'].value,
                  telefono: controls['telefono'].value,
                },
                especialidadId: controls['especialidad'].value,
                licencia: controls['licencia'].value,
                honorarios: 80000,
              })
              .subscribe({
                next: (doctor) => {
                  this.usuarioService
                    .crearUsuario({
                      rol: 'DOCTOR',
                      email: controls['email'].value,
                      entidadId: doctor.id,
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
