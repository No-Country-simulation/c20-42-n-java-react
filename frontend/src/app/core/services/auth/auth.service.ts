import {inject, Injectable} from '@angular/core';
import {from, Observable} from "rxjs";
import {Auth, createUserWithEmailAndPassword, updateProfile} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  firebaseAuth = inject(Auth);

  register(username:string, email:string, password:string): Observable<void>{
    const promise =
      createUserWithEmailAndPassword(this.firebaseAuth, email, password)
        .then( response => {
          updateProfile(response.user, {displayName: 'username'});
    })

    return from(promise);
  }
}
