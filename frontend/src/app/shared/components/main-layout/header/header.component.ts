import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../../../../core/services/auth/auth.service";
import {User} from "@angular/fire/auth";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  public router: Router;
  authStateObs$ : Observable<User | null>;

  constructor(private _router: Router, public _authService: AuthService ) {
    this.router = _router;
    this.authStateObs$ = _authService.authState;
  }

  isSpecialtiesOrDoctors(): boolean {
    return (
      this.router.url === '/specialties' ||
      this.router.url === '/doctor' ||
      this.router.url === '/doctors' ||
      this.router.url === '/turnos' ||
      this.router.url === '/turnos-doctor' ||
      this.router.url === '/historial-medico' ||
      this.router.url === '/user' ||
      this.router.url === '/pacientes' ||
      this.router.url.includes('/historial-medico')
    );
  }

  logout(){
    this._authService.logout();
  }


}
