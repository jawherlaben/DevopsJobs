import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuardClass {
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
    if(this.isCompanyLoggedIn) {
      this.router.navigate(['/company-component/profile']);
      return false
    }
    
    if(this.isUserLoggedIn) {
      this.router.navigate(['/user-component/user-dashboard']);
      return false;
    }

    return true;
  }
}

export const LogoutGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(LogoutGuardClass).canActivate(next, state);
}