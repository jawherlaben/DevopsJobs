import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../Model/user';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentification.service';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
})
export class ProfileMenuComponent implements OnInit {
  public isMenuOpen = false;
  @Input() public user: User | undefined;

  isUserLoggedIn = false; 
  isCompanyUser = false; 

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(loggedIn => {
      this.isUserLoggedIn = loggedIn;
      if (this.isUserLoggedIn) {
        this.authService.isCompanyUser.subscribe(isCompanyUser => {
          this.isCompanyUser = isCompanyUser;
        });
      }
    });
  }

  public toggleMenu(value: boolean): void {
    this.isMenuOpen = value;
  }

  logout() {
    this.authService.logout();
  }
}