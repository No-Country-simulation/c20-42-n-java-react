import {Component} from '@angular/core';
import {KeycloakService} from "../../../../core/services/keycloak/keycloak.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  authenticated: boolean | undefined;

  constructor(private _keycloakService: KeycloakService,
    public router: Router
  ) {
    this.authenticated = this._keycloakService.keycloak?.authenticated;
  }

  async register(){
    await this._keycloakService.keycloak?.register();
    this.authenticated = true;
  }

  async login(){
    await this._keycloakService.keycloak?.login();
    this.authenticated = true;
  }
  async logout(){
    await this._keycloakService.keycloak?.logout();
    this.authenticated = false;
  }


  isSpecialtiesOrDoctors(): boolean {
    return this.router.url === '/specialties' || this.router.url === '/doctors'
    || this.router.url === '/register' || this.router.url === '/login';
  }

}
