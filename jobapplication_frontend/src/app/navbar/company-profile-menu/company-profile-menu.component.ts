import { Component, Input } from '@angular/core';
import { AuthenticationService } from '../../services/authentification.service';
import { Company } from '../../Model/Company';

@Component({
  selector: 'app-company-profile-menu',
  templateUrl: './company-profile-menu.component.html',
})
  export class CompanyProfileMenuComponent {
  public isMenuOpen = false;
  @Input() company: Company | undefined;

  isUserLoggedIn = false; 
  isCompanyUser = false;

  constructor(private authService: AuthenticationService) {}

  public toggleMenu(value: boolean): void {
    this.isMenuOpen = value;
  }

  logout() {
    this.authService.logout();
  }
}