import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideHttpClient } from '@angular/common/http';

/* This code snippet is exporting a constant variable `appConfig` of type `ApplicationConfig`. The
`appConfig` object has a property `providers` which is an array of different providers. These
providers are used for configuring the application with necessary services and dependencies. */
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient()
  ]
};
