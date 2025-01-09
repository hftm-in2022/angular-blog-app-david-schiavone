import {
  ApplicationConfig,
  inject,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  NavigationError,
  provideRouter,
  withNavigationErrorHandler,
} from '@angular/router';

import { routes } from './app.routes';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { authInterceptor } from './core/interceptor/http-interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { GlobalErrorHandler } from './core/error-handler/global-error-handler';
import { authConfig } from './core/auth/auth.config';
import { AuthInterceptor, provideAuth } from 'angular-auth-oidc-client';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withNavigationErrorHandler((e: NavigationError) =>
        inject(GlobalErrorHandler).handleError(e),
      ),
    ),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimationsAsync(),
    provideAuth(authConfig),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    // {
    //   provide: ErrorHandler,
    //   useClass: GlobalErrorHandler,
    // },
  ],
};
