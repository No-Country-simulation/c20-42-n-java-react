import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  public router: Router;

  constructor(private _router: Router) {
    this.router = _router;
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
}
