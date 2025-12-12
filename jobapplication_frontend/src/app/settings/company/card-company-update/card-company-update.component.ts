import { Component, Input } from '@angular/core';
import { CompanyUpdateDTO } from '../card-company-settings/CompanyUpdateDTO';

@Component({
  selector: 'app-card-company-update',
  templateUrl: './card-company-update.component.html',
  styleUrls: ['./card-company-update.component.css']
})
export class CardCompanyUpdateComponent {

  @Input() companyUpdateDTO: CompanyUpdateDTO | null = null;


}
