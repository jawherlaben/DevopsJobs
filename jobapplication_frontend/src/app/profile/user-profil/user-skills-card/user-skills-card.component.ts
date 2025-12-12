import { Component, Input } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-skills-card',
  templateUrl: './user-skills-card.component.html',
})
export class UserSkillsCardComponent {
  @Input() skills?: string[] = [];

  constructor(public userService: UserService) {}
}
