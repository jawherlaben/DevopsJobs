import { Component, Input } from '@angular/core';
import { Experience } from '../../../Model/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-experience-card',
  templateUrl: './user-experience-card.component.html',
})
export class UserExperienceCardComponent {
  @Input() experience?: Experience[];

  constructor(public userService: UserService) {
    this.experience = <Experience[]>[{}];
  }
}