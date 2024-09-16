import {Injectable} from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
} from '@angular/fire/auth';
import {from, Observable,} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly authState: Observable<User>;

  constructor(
    private _authService: Auth
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
    from(signOut(this._authService)).subscribe(() => {
      window.location.href = '/'; // Redirige a la página de inicio
    });
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
