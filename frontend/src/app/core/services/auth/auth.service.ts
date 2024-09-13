import { Injectable } from '@angular/core';
import {
  Auth, authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut,
  updateProfile,
  User
} from "@angular/fire/auth";
import {from, Observable} from "rxjs";
import {UsuarioControllerService} from "../api-client/services/usuario-controller.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly authState : Observable<User>;

  constructor(private _authService: Auth, private _usuarioControllerService: UsuarioControllerService) {
    this.authState = authState(this._authService);
  }

  register(username:string, email:string, password:string): Observable<void> {
    const promise = createUserWithEmailAndPassword(this._authService,email, password)
      .then(
        result => updateProfile(result.user, {displayName: username})
      )
      .catch(err => console.log(err));
    return from(promise);
  }

  login(email:string, password:string): Observable<any> {
    const promise = signInWithEmailAndPassword(this._authService,email, password);
    return from(promise);
  }

  logout(){
    return from(signOut(this._authService));
  }

  getUserDetails(){
    this._usuarioControllerService.obtenerUsuario();
  }

  setUserDetails(){
    this._usuarioControllerService.crearUsuario();
  }


}
