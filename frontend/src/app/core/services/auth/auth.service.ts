import { Injectable } from '@angular/core';
import {Auth, createUserWithEmailAndPassword, updateProfile} from "@angular/fire/auth";
import {from, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _authService: Auth) {}

  register(username:string, email:string, password:string): Observable<void> {
    const promise = createUserWithEmailAndPassword(this._authService,email, password)
      .then(
        result => updateProfile(result.user, {displayName: username})
      )
      .catch(err => console.log(err));
    return from(promise);
  }

}
