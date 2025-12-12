import { Injectable } from '@angular/core';
import { Menu } from '../core/constants/menu';
import { MenuItem } from '../Model/menu-model';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from './user.service';
import { AuthenticationService } from './authentification.service';
import { MenuCompany } from '../core/constants/menuCompany';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private showSideBarSubject = new BehaviorSubject<boolean>(true);
  public showSideBar$: Observable<boolean> = this.showSideBarSubject.asObservable();
  
  public pagesMenu: MenuItem[] = [];

  constructor(private userService: UserService, private authService: AuthenticationService) {
    this.userService.currentUser.subscribe(user => {
      if (user) {
        this.pagesMenu = Menu.pages;
      }
    });

    this.authService.isCompanyUser.subscribe(user => {
      if (user) {
        this.pagesMenu = MenuCompany.pages;
      }
    });
  }

  toggleSideBar() {
    this.showSideBarSubject.next(!this.showSideBarSubject.value);
  }
}
