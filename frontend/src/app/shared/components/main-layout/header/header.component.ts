import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../../../../core/services/auth/auth.service";
import {map} from "rxjs/operators";
import {user, User} from "@angular/fire/auth";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  public router: Router;
  authStateObs$ : Observable<User | null>;

  constructor(private _router: Router, private _authService: AuthService ) {
    this.router = _router;
    this.authStateObs$ = _authService.authState;
  }

  isSpecialtiesOrDoctors(): boolean {
    return (
      this.router.url === '/historial-medico' ||
      this.router.url === '/turnos' ||
      this.router.url === '/specialties' ||
      this.router.url === '/doctors' ||
      this.router.url === '/register' ||
      this.router.url === '/login'||
      this.router.url === '/doctor'||
      this.router.url === '/user'
    );
  }

  logout(){
    this._authService.logout();
  }
}
