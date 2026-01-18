import { KeycloakService } from './services/keycloak.service';

export function initializeKeycloak(keycloakService: KeycloakService) {
  return () => keycloakService.init();
}