import { Component, Input } from '@angular/core';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-user-head-profile',
  templateUrl: './user-head-profile.component.html',
})

export class HeadProfileComponent {
  @Input() user: User | undefined;
}
