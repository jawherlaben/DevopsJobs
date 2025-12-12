import { Component, Input } from '@angular/core';
import { Company } from 'src/app/Model/Company';

@Component({
  selector: 'app-company-head-profile',
  templateUrl: './company-head-profile.component.html',
  styleUrls: ['./company-head-profile.component.css']
})
export class CompanyHeadProfileComponent {
  @Input() company: Company | undefined;
  

}
