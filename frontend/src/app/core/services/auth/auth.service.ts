import { Injectable } from '@angular/core';
import {
  Auth, authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut,
  updateProfile,
  User
} from "@angular/fire/auth";
import {catchError, from, lastValueFrom, Observable, of, switchMap, tap, throwError} from "rxjs";
import {UsuarioControllerService} from "../api-client/services/usuario-controller.service";
import {Usuario} from "../api-client/models/usuario";
import {CrearUsuario$Params} from "../api-client/fn/usuario-controller/crear-usuario";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly authState : Observable<User>;

  constructor(private _authService: Auth, private _usuarioControllerService: UsuarioControllerService) {
    this.authState = authState(this._authService);
  }

  register(username: string, email: string, password: string): Observable<Usuario> {
    return from(createUserWithEmailAndPassword(this._authService, email, password)).pipe(
      switchMap(result =>
        from(updateProfile(result.user, {displayName: username})).pipe(
          switchMap(() => {
            const user: CrearUsuario$Params = {
              body: {
                rol: 'DOCTOR',
                email: email,
              }
            };
            return this._usuarioControllerService.crearUsuario(user);
          })
        )
      ),
      tap(backendUser => {
        localStorage.setItem('user', JSON.stringify(backendUser));
        console.log(backendUser)
      }),
      catchError(err => {
        console.log(err);
        return of();
      })
    );
  }


  login(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this._authService, email, password)).pipe(
      switchMap(result => {
        return this._usuarioControllerService.obtenerUsuario().pipe(
          // Guardar el usuario en el localStorage
          tap(backendUser => {
            localStorage.setItem('user', JSON.stringify(backendUser));
          })
        );
      }),
      catchError(err => {
        console.error('Error during login: ', err);
        return throwError(err);
      })
    );
  }


  logout(){
    localStorage.removeItem('user');
    return from(signOut(this._authService));
  }


}
