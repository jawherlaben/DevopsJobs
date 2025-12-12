import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { User } from '../Model/user';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentification.service';
import { Company } from '../Model/Company';
import { CompanyService } from '../services/company.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
 
})
export class SidebarComponent implements OnInit {
  public user: User | undefined;
  public company: Company | undefined;
  isCompany: boolean = false;
  showSideBar: boolean = true;

  constructor(public menuService: MenuService, private userService: UserService, public authService: AuthenticationService, private companyService: CompanyService) {}

  ngOnInit(): void {
    this.userService.getUserFromToken();
    this.userService.currentUser.subscribe(user => {
      this.user = user;
    });

    this.companyService.getCompanyFromToken();
    this.companyService.currentCompany.subscribe(company => {
      this.isCompany = true;
      this.company = company;
    });
    
    this.menuService.showSideBar$.subscribe((showSideBar) => {
      this.showSideBar = showSideBar;
    });
  }
}


