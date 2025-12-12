import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Company } from 'src/app/Model/Company';
import { CompanyUpdateDTO } from './CompanyUpdateDTO';
import { CompanyService } from 'src/app/services/company.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card-company-settings',
  templateUrl: './card-company-settings.component.html',
  styleUrls: ['./card-company-settings.component.css']
})

export class CardCompanySettingsComponent {

  @Input() company: Company | undefined ;
  companyUpdateDTO: CompanyUpdateDTO = {};

  editMessage: string;
  editMessageClass: string;

  @Output() companyUpdateDTOChanged = new EventEmitter<CompanyUpdateDTO>();

  constructor(private companyService: CompanyService, private router: Router,  private toastr: ToastrService  ) {
    this.editMessage = '';
    this.editMessageClass = '';
  }

  ngOnInit(): void {
    this.companyUpdateDTOChanged.emit(this.companyUpdateDTO);
    
    if (this.company) {
      this.companyUpdateDTO = { ...this.company };
      this.companyUpdateDTOChanged.emit(this.companyUpdateDTO);
    } else {
      this.companyService.currentCompany.subscribe(company => {
        this.company = company;
        this.companyUpdateDTO = { ...this.company };
      });
      return;
    }
  }

  updateCompanyInfos(settingsForm: NgForm): void {

    if (settingsForm.valid && this.companyUpdateDTO ) { 
      this.companyService.updateCompany(this.companyUpdateDTO).subscribe({
        next: (response) => {
          this.toastr.success('Update successful');
          if (this.company) {
            Object.assign(this.company, this.companyUpdateDTO);
            this.companyUpdateDTOChanged.emit(this.companyUpdateDTO);
  
            this.router.navigate(['/company-component/profile']);
          }
        },
        error: (error) => {
          this.toastr.error('Erreur lors de la mise à jour');
        }
      });
    } else 
    if(!settingsForm.valid )
    {
      this.toastr.error('Le formulaire n est pas valide ou les données sont manquantes');
      return;
    }

  }

}
