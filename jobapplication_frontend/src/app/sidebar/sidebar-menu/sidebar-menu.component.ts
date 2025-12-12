import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/services/user.service';
import { Company } from '../../Model/Company';

@Component({
    selector: 'app-sidebar-menu',
    templateUrl: './sidebar-menu.component.html',
})
export class SidebarMenuComponent implements OnInit {
  public user: User | undefined;
  public company: Company | undefined;
  
  showSideBar: boolean = true;
  
  constructor(public menuService: MenuService,private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserFromToken();
    this.userService.currentUser.subscribe(user => {
      this.user = user;
    });
    
    this.menuService.showSideBar$.subscribe((showSideBar) => {
      this.showSideBar = showSideBar;
    });
  }
}
