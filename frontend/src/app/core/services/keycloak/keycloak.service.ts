import { Injectable } from '@angular/core';
import Keycloak from "keycloak-js";

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  private _keycloak: Keycloak | undefined;

  constructor() {
  }

  async init() {
    console.log("Initializing Keycloak Service");
    console.log("Authenticating user")
    const authenticated = await this.keycloak?.init({
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html'
    });
    if (authenticated)
      console.log("User authenticated");
  }

  //Utiliza Singleton
  get keycloak() {
    if (!this._keycloak) {                //undefined devuelve FALSE. Por lo tanto, aqui pregunta si this._keycloak es undefined
      this._keycloak = new Keycloak({
        url: 'http://localhost:8181',
        realm: 'HealthTech',
        clientId: 'angular_client'
      })
    }
    return this._keycloak;
  }

  get token(): string | undefined{
    return this._keycloak?.token;
  }

}
