import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth/auth.service';
import {Router} from '@angular/router';
import {UsuarioControllerService} from '../../../core/services/api-client/services/usuario-controller.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  registroForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private usuarioService: UsuarioControllerService
  ) {}

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.registroForm.valid) {
      const controls = this.registroForm.controls;
      this.authService
        .login(controls['email'].value, controls['password'].value)
        .subscribe({
          next: (result) => {
            this.usuarioService.obtenerUsuario().subscribe({
              next: (backendUser) =>
                localStorage.setItem('usuario', JSON.stringify(backendUser)),
              error: (err) => console.log(err),
            });
            this.router.navigateByUrl('/');
          },
          error: (err) => {
            console.log(err);
          },
        });
    } else alert('Alguno de los campos esta incompleto!!!!!');
  }
}
