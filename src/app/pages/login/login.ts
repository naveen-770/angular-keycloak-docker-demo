import { Component } from '@angular/core';
import { KeycloakService } from '../../services/keycloak.service';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
constructor(private keycloakService: KeycloakService) {}
 onKeycloakLogin() {
  this.keycloakService.login()

    console.log('Keycloak login button clicked',this.keycloakService.getToken());
  }
}
 
