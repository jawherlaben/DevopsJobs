import { Component } from '@angular/core';
import { CompanyUpdateDTO } from './card-company-settings/CompanyUpdateDTO';
import { Company } from 'src/app/Model/Company';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-settings',
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.css']
})
export class CompanySettingsComponent {

  public company: Company | undefined;
  companyUpdateDTO: CompanyUpdateDTO | null = null;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanyFromToken();
    this.companyService.currentCompany.subscribe(company => {
      this.company = company;
    });
  }

  updateCompanyUpdateDTO(companyUpdateDTO: CompanyUpdateDTO): void {
    this.companyUpdateDTO = companyUpdateDTO;
  }
}
