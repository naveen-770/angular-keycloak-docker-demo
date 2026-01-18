import { Injectable } from '@angular/core';
import Keycloak, { KeycloakInitOptions } from 'keycloak-js';

@Injectable({
  providedIn: 'root',
})



export class KeycloakService {
  private keycloak!: Keycloak;

  init(): Promise<boolean> {
    this.keycloak = new Keycloak({
      url: 'http://localhost:8080',
      realm: 'angular-realm',
      clientId: 'angular-app'
    });

    return this.keycloak.init({
      onLoad: 'check-sso',
      checkLoginIframe: false
    });
  }

  login(): void {
    this.keycloak.login();
  }

  logout(): void {
    this.keycloak.logout();
  }

  isLoggedIn(): boolean {
    return !!this.keycloak?.token;
  }

  getToken():string{
    return this.keycloak.token || ''
  }
}


