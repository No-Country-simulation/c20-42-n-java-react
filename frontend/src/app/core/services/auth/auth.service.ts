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
  register(username: string, email: string, password: string) {
    return from(createUserWithEmailAndPassword(this._authService, email, password)
      .then(result =>  updateProfile(result.user, { displayName: username }))
    );
  }

  login(email: string, password: string){
    return from(signInWithEmailAndPassword(this._authService, email, password));
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
