import { Component , OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../../core/services/auth/auth.service";
import {Router} from "@angular/router";
import {CrearUsuario$Params} from "../../../core/services/api-client/fn/usuario-controller/crear-usuario";
import {UsuarioControllerService} from "../../../core/services/api-client/services/usuario-controller.service";
@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrl: './register-doctor.component.css',
})
export class RegisterDoctorComponent {
  registroForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private usuarioService: UsuarioControllerService
  ) {}


  ngOnInit(): void {
    this.registroForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      // dni: ['', Validators.required],
      // telefono: ['', Validators.required],
      // fechaNacimiento: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.registroForm.valid) {
      const controls = this.registroForm.controls;
      this.authService.register(controls['username'].value, controls['email'].value, controls['password'].value).subscribe({
        next: result => {
          const usuario: CrearUsuario$Params = {
            body: {
              rol: 'DOCTOR',
              email: controls['email'].value
            }
          }
          this.usuarioService.crearUsuario(usuario).subscribe({
            next: backendUser => localStorage.setItem('usuario', JSON.stringify(backendUser))
          });
          this.router.navigate(['']);
        },
        error: err => console.log(err)
      })
    }
  }
}
