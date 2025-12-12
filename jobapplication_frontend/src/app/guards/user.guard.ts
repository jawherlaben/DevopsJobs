import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardClass {
  isUserLoggedIn: boolean = false;
  isCompanyLoggedIn: boolean = false;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.authService.isLoggedIn.subscribe({
      next: (value) => {
        this.isUserLoggedIn = value;
      }
    });

    this.authService.isCompanyUser.subscribe({
      next: (value) => {
        this.isCompanyLoggedIn = value;
      }
    });
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.isUserLoggedIn) {
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }
}

export const UserGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(UserGuardClass).canActivate(next, state);
}