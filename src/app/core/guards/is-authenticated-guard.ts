import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { UserService } from '../../services/user.service';

export const isAuthenticatedGuard: CanActivateFn = () => {
  const oidcSecurityService = inject(OidcSecurityService);
  const userService = inject(UserService);
  const router = inject(Router);

  return new Promise<boolean>((resolve) => {
    oidcSecurityService.checkAuth().subscribe(({ isAuthenticated }) => {
      // keine subscription hier, sondern eine Observable zurückgeben
      if (!isAuthenticated) {
        router.navigate(['/']);
        resolve(false);
      } else {
        oidcSecurityService.getAccessToken().subscribe((accessToken) => {
          // subscribe innerhalb subscribe! :-o
          if (accessToken && userService.hasRole(accessToken, 'user')) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      }
    });
  });
};
