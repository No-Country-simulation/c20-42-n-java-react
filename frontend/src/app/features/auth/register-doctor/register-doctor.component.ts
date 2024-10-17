import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../../core/services/auth/auth.service";
import {Router} from "@angular/router";
import {UsuarioControllerService} from "../../../core/services/api-client/services/usuario-controller.service";
import {DoctorControllerService} from "../../../core/services/api-client/services/doctor-controller.service";
import {Especialidad} from "../../../core/services/api-client/models/especialidad";
import {
  EspecialidadControllerService
} from "../../../core/services/api-client/services/especialidad-controller.service";
import {DoctorRes} from "../../../core/services/api-client/models/doctor-res";

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrl: './register-doctor.component.css',
})
export class RegisterDoctorComponent implements OnInit {
  registroForm!: FormGroup;
  especialidades!: Especialidad[];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private usuarioService: UsuarioControllerService,
    private doctorService: DoctorControllerService,
    private especialidadesService : EspecialidadControllerService
  ) {
  }


  ngOnInit(): void {
    this.registroForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      dni: ['', Validators.required],
      telefono: ['', Validators.required],
      edad: ['', Validators.required],
      licencia: ['', Validators.required],
      especialidad: ['', Validators.required]
    });
    this.especialidadesService.obtenerEspecialidad().subscribe({
      next: especialidades => this.especialidades = especialidades
    });
  }

  onSubmit(): void {
    if (this.registroForm.valid) {
      const controls = this.registroForm.controls;
      this.authService.register(controls['username'].value, controls['email'].value, controls['password'].value).subscribe({
        next: result => {
          this.doctorService.crearDoctor({
            body: {
              persona: {
                dni: controls['dni'].value,
                edad: controls['edad'].value,
                email: controls['email'].value,
                nombre: controls['username'].value,
                telefono: controls['telefono'].value
              },
              especialidadId: controls['especialidad'].value,
              licencia: controls['licencia'].value,
              //TODO: resolver
              honorarios: 80000
            }
          }).subscribe({
            next: doctor => {
              this.usuarioService.crearUsuario({
                body: {
                  rol: 'DOCTOR',
                  email: controls['email'].value,
                  entidadId: doctor.id
                }
              }).subscribe({
                next: backendUser => localStorage.setItem('usuario', JSON.stringify(backendUser)),
                error: err => console.log(err)
              });
            },
            error: err => console.log(err)
          })
          this.router.navigate(['']);
        },
        error: err => console.log(err)
      })
    }
    else
      alert("Se te olvidó completar un campo maestro!")
  }


}
