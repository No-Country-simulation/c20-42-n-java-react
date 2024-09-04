import { Component } from '@angular/core';
import {KeycloakService} from "../../../../core/services/keycloak/keycloak.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  authenticated: boolean | undefined;

  constructor(private _keycloakService: KeycloakService) {
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


}
