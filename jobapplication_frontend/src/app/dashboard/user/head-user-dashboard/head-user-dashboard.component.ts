import { Component, Input } from '@angular/core';
import { User } from '../../../Model/user';

@Component({
  selector: 'app-head-user-dashboard',
  templateUrl: './head-user-dashboard.component.html',
})
export class HeadUserDashboardComponent  {
  @Input() user: User | undefined;

}
