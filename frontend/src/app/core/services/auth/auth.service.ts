import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
} from '@angular/fire/auth';
import {
  catchError,
  from,
  lastValueFrom,
  Observable,
  of,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { UsuarioControllerService } from '../api-client/services/usuario-controller.service';
import { Usuario } from '../api-client/models/usuario';
import { CrearUsuario$Params } from '../api-client/fn/usuario-controller/crear-usuario';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly authState: Observable<User>;

  constructor(
    private _authService: Auth,
    private _usuarioControllerService: UsuarioControllerService
  ) {
    this.authState = authState(this._authService);
  }

  //TODO: ABSTRAER CAMPOS EN UNA ENTIDAD USUARIO.
  register(username: string, email: string, password: string, rol : string): Observable<Usuario> {
    return from(createUserWithEmailAndPassword(this._authService, email, password)).pipe(
      switchMap((result) =>
        from(updateProfile(result.user, { displayName: username })).pipe(
          switchMap(() => {
            const usuario: CrearUsuario$Params = {
              body: {
                rol: rol == 'DOCTOR' ? 'DOCTOR' : 'PACIENTE',
                email: email,
              },
            };
            return this._usuarioControllerService.crearUsuario(usuario);
          })
        )
      ),
      tap((backendUser) => {
        localStorage.setItem('usuario', JSON.stringify(backendUser));
        console.log(backendUser);
      }),
      catchError((err) => {
        console.log(err);
        return of();
      })
    );
  }

  login(email: string, password: string): Observable<any> {
    return from(
      signInWithEmailAndPassword(this._authService, email, password)
    ).pipe(
      switchMap((result) => {
        return this._usuarioControllerService.obtenerUsuario().pipe(
          // Guardar el usuario en el localStorage
          tap((backendUser) => {
            localStorage.setItem('usuario', JSON.stringify(backendUser));
          })
        );
      }),
      catchError((err) => {
        console.error('Error during login: ', err);
        return throwError(err);
      })
    );
  }

  logout() {
    localStorage.removeItem('usuario');
    return from(signOut(this._authService));
  }

  getCurrentUser() {
    const userJson = localStorage.getItem('usuario');
    if (userJson) {
      return JSON.parse(userJson);
    }
    return null;
  }

  isDoctor() {
    const usuario = this.getCurrentUser();
    return usuario && usuario.rol === 'DOCTOR';
  }

  isPatient() {
    const usuario = this.getCurrentUser();
    return usuario && usuario.rol === 'PACIENTE';
  }

}
