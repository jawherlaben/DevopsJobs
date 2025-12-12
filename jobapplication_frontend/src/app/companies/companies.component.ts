import { Component, OnInit } from '@angular/core';
import { Company } from '../Model/Company';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[] = [];
  totalCompanies: number = 0;
  companiesPerPage: number = 10;
  currentPage: number = 1;
  paginatedCompanies: Company[] = [];
  filteredCompanies: Company[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {    
    this.companyService.getCompanies().subscribe((companies: Array<Company>) => {
      this.companies = [...companies];
      this.totalCompanies = this.companies.length;
      this.onPageChange(1);
    });
  }

  // Cette fonction se lance après le changement de la page et elle permet de:
  // filtrer les entreprises de la variable globale (companies)
  // mettre à jour les entreprises affichées dans la page (paginatedCompanies)
  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    this.updatePaginatedCompanies();
    this.performSearch();
  }

  // Cette fonction permet de mettre à jour les entreprises affichées dans la page
  updatePaginatedCompanies(): void {
    const startIndex = (this.currentPage - 1) * this.companiesPerPage;
    const endIndex = startIndex + this.companiesPerPage;
    this.paginatedCompanies = this.filteredCompanies.slice(startIndex, endIndex);
  }

  // Cette fonction permet de filtrer les entreprises de "companies" et de mettre à jour "filteredCompanies"
  performSearch(query?: string): void {
    if (query) {
      this.filteredCompanies = this.companies.filter(company =>
        company.name.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      this.filteredCompanies = this.companies;
    }
    this.totalCompanies = this.filteredCompanies.length;
    this.onPageChange(1);
  }

}
