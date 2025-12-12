import { Component, Input } from '@angular/core';
import { Company } from '../../../Model/Company';
import { AuthenticationService } from '../../../services/authentification.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-head-company-dashboard',
  templateUrl: './head-company-dashboard.component.html',
})
export class HeadCompanyDashboardComponent {
  @Input() company?: Company;

  constructor(private authService: AuthenticationService, private userService: UserService) {}
}
