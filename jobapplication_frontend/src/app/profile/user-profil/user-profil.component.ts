import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
})
export class UserProfilComponent implements OnInit {
  user: User | undefined;

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserFromToken();
    this.userService.currentUser.subscribe(user => {
      this.user = user;
    });
  }
}
