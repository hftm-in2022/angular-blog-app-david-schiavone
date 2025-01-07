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
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptor/http-interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { GlobalErrorHandler } from './error-handler/global-error-handler';

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
    // {
    //   provide: ErrorHandler,
    //   useClass: GlobalErrorHandler,
    // },
  ],
};
