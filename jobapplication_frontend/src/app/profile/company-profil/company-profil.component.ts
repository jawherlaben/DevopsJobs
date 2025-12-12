import { Component } from '@angular/core';
import { Company } from 'src/app/Model/Company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-profil',
  templateUrl: './company-profil.component.html',
  styleUrls: ['./company-profil.component.css']
})
export class CompanyProfilComponent {
  company : Company | undefined;

  constructor(public companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanyFromToken();
    this.companyService.currentCompany.subscribe(company => {
      this.company = company;
    });
  }

}
