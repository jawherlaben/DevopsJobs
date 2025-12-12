import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { JobService } from '../services/job.service';
import {Skills,REMUNERATION, JOB_TYPES } from '../Model/job-offer';
import { JobDto } from '../Model/job.dto';
import { CompanyService } from '../services/company.service';
import { Company } from '../Model/Company';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})

export class JobComponent {
  jobForm: FormGroup;
  skillsEnum = Object.values(Skills).filter(value => typeof value === 'string');
  jobTypesEnum = Object.values(JOB_TYPES).filter(value => typeof value === 'string');
  remunerationOptions = REMUNERATION;

  company : Company | undefined;

  constructor(
    private formBuilder: FormBuilder, 
    private toastr: ToastrService,
    private jobService: JobService,
    private companyService : CompanyService
  ) {
    this.jobForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      body: ['', Validators.required],
      tags: [[], Validators.required]
    });
  }

  ngOnInit(): void {
    this.companyService.getCompanyFromToken();
    this.companyService.currentCompany.subscribe(company => {
      this.company = company;
    });
  }

  onSubmit() {
    this.companyService.currentCompany.subscribe(company => {
      this.company = company;
      if (this.jobForm.valid && this.company) {
        const jobData: JobDto = {
          ...this.jobForm.value,
          recruiter: this.company._id
        };
  
  
        this.jobService.createJob(jobData).subscribe({
          next: (response) => {
            this.toastr.success('Job posted successfully!', 'Success');
            this.jobForm.reset();
          },
          error: (error) => {
            this.toastr.error('Failed to post job', 'Error');
          }
        });
      } else 
      if(!this.jobForm.valid) {
        this.toastr.error('Please fill out the form correctly', 'Form Invalid');
      }
    });
  }
}
