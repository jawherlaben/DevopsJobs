import { ChangeDetectorRef, Component } from '@angular/core';
import { User } from '../../Model/user';
import { UserService } from '../../services/user.service';
import { UserUpdateDTO } from './card-settings/UserUpdate.dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
})
export class UserSettingsComponent {
  public user: User | undefined;
  userUpdateDTO: UserUpdateDTO | null = null;

  public section: string | null = null;

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userService.getUserFromToken();
    this.userService.currentUser.subscribe(user => {
      this.user = user;
    });

    this.route.fragment.subscribe(fragment => {
      this.section = fragment;
    });
  }

  updateUserUpdateDTO(userUpdateDTO: UserUpdateDTO): void {
    this.userUpdateDTO = userUpdateDTO;
  }
}
