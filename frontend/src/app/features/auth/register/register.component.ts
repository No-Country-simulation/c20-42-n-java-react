import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../../core/services/auth/auth.service";
import {Router} from "@angular/router";
import {UsuarioControllerService} from "../../../core/services/api-client/services/usuario-controller.service";
import {PacienteControllerService} from "../../../core/services/api-client/services/paciente-controller.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  registroForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private usuarioService: UsuarioControllerService,
    private pacienteService: PacienteControllerService
  ) {
  }

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      dni: ['', Validators.required],
      telefono: ['', Validators.required],
      edad: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registroForm.valid) {
      const controls = this.registroForm.controls;
      this.authService.register(controls['username'].value, controls['email'].value, controls['password'].value).subscribe({
        next: result => {
          this.pacienteService.crearPaciente({
            body: {
              persona: {
                dni: controls['dni'].value,
                edad: 27,
                email: controls['email'].value,
                nombre: controls['username'].value,
                telefono: controls['telefono'].value
              }
            }
          }).subscribe({
            next: paciente => {
              this.usuarioService.crearUsuario({
                body: {
                  rol: 'PACIENTE',
                  email: controls['email'].value,
                  entidadId: paciente.id
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
      alert("Te falta un campo máquina, seguí intentando");
  }


}
