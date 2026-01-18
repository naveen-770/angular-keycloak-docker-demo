import { ApplicationConfig, APP_INITIALIZER, provideBrowserGlobalErrorListeners, PLATFORM_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { KeycloakService } from './services/keycloak.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    {
      provide: APP_INITIALIZER,
      useFactory: (keycloakService: KeycloakService, platformId: Object) => () => {
        if (isPlatformBrowser(platformId)) {
          return keycloakService.init();
        }
        return Promise.resolve();
      },
      deps: [KeycloakService, PLATFORM_ID],
      multi: true
    }
  ]
};
