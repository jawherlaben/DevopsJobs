import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Company } from '../Model/Company';
import {classpathoperations, pathconst} from 'src/environments/environment';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';

import { CompanyUpdateDTO } from '../settings/company/card-company-settings/CompanyUpdateDTO';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private currentCompanySubject = new BehaviorSubject<Company |  undefined>(undefined);
  currentCompany = this.currentCompanySubject.asObservable();
  private apiUrl = environment.apiUrl;

  
  constructor(private httpClient: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.httpClient
    .get<Company[]>(`${environment.apiUrl}/${pathconst.COMPANY_ENDPOINT_PATH}`, {headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('currentUserToken')}`,
    }});
  }

  getCompanyById(id: string): Observable<Company> {
    return this.httpClient
    .get<Company>(`${environment.apiUrl}/${pathconst.COMPANY_ENDPOINT_PATH}/${classpathoperations.FIND_COMPANY_BY_ID}/${id}`);
  }

  getCompanyByEmail(email: string): Observable<Company> {
    return this.httpClient
    .get<Company>(`${environment.apiUrl}/${pathconst.COMPANY_ENDPOINT_PATH}/${classpathoperations.FIND_COMPANY_BY_EMAIL}/${email}`);
  }

  addCompany(company: Company): Observable<Company> {
    return this.httpClient
    .post<Company>(`${environment.apiUrl}/${pathconst.COMPANY_ENDPOINT_PATH}`, company);
  }

  deleteCompany(id: string) {
    return this.httpClient
    .delete(`${environment.apiUrl}/${pathconst.COMPANY_ENDPOINT_PATH}/${id}`);
  }

  getCompanyFromToken(): void {
    const storedToken = localStorage.getItem('currentUserToken');

    if (storedToken) {
      const companyId = this.getCompanyIdFromToken(storedToken);
      
      this.getCompanyById(companyId).subscribe(company => {
        this.currentCompanySubject.next(company);
      });
    } else {
      this.currentCompanySubject.next(undefined);
    }
  }

  getCompanyIdFromToken(token: string): string {
    const decodedToken: any = jwt_decode.jwtDecode(token);
    return decodedToken._id;
  }

  updateCompany(company: CompanyUpdateDTO): Observable<Company> {
    const url = `${this.apiUrl}/${pathconst.COMPANY_ENDPOINT_PATH}/${company._id}`;
    return this.httpClient.patch<Company>(url, company);
  }

}
