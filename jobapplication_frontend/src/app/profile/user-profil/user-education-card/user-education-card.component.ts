import { Component, Input } from '@angular/core';
import { Education } from '../../../Model/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-education-card',
  templateUrl: './user-education-card.component.html',
})
export class UserEducationCardComponent {
  @Input() education?: Education[];

  constructor(public userService: UserService) {
    this.education = <Education[]>[{}];
  }
}
