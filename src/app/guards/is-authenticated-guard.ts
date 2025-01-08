import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const isAuthenticatedGuard: CanActivateFn = () => {
  const router = inject(Router);
  const isAuthenticated = !!localStorage.getItem('token');

  if (!isAuthenticated) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
