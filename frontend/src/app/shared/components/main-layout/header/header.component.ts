import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(public router: Router) {}

  isSpecialtiesOrDoctors(): boolean {
    return (
      this.router.url === '/specialties' ||
      this.router.url === '/doctor' ||
      this.router.url === '/doctors' ||
      this.router.url === '/turnos' ||
      this.router.url === '/historial-medico' ||
      this.router.url === '/user'
    );
  }
}
