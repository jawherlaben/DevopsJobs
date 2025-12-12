import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { classpathoperations, environment, pathconst } from 'src/environments/environment';
import { Application } from '../Model/application';
import { User } from '../Model/user';
import { Router } from '@angular/router';
import { Company } from '../Model/Company';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;
  private currentUserSubject = new BehaviorSubject<User |  undefined>(undefined);
  private currentCompanySubject = new BehaviorSubject<Company |  undefined>(undefined);

  currentUser = this.currentUserSubject.asObservable();
  currentCompany = this.currentCompanySubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  getHeaders(): HttpHeaders {
    const storedToken = localStorage.getItem('currentUserToken');

    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storedToken}` 
    });
  }

  getUserIdFromToken(token: string): string {
    const decodedToken: any = jwt_decode.jwtDecode(token);
    return decodedToken._id;
  }

  getUserById(userId: string): Observable<User> {
    const headers = this.getHeaders();
    const url = `${this.apiUrl}/${pathconst.USER_ENDPOINT_PATH}/${classpathoperations.FIND_USER_BY_ID}/${userId}`;
    return this.http.get<User>(url,{ headers });
  }

  getCompanyById(userId: string): Observable<Company> {
    const headers = this.getHeaders();
    const url = `${this.apiUrl}/${pathconst.COMPANY_ENDPOINT_PATH}/${classpathoperations.FIND_COMPANY_BY_ID}/${userId}`;
    return this.http.get<Company>(url,{ headers });
  }

  getUserFromToken(): void {
    const storedToken = localStorage.getItem('currentUserToken');

    if (storedToken) {
      const userId = this.getUserIdFromToken(storedToken);
      
      try {
        this.getUserById(userId).subscribe(user => {
          this.currentUserSubject.next(user);
        });
      } catch (err) {
        this.currentUserSubject.next(undefined);
      }
    } else {
      this.currentUserSubject.next(undefined);
    }
  }

  getCompanyFromToken(): void {
    const storedToken = localStorage.getItem('currentUserToken');

    if (storedToken) {
      const companyId = this.getUserIdFromToken(storedToken);
      
      try {
        this.getCompanyById(companyId).subscribe(company => {
          this.currentCompanySubject.next(company);
        });
      } catch (err) {
        this.currentCompanySubject.next(undefined);
      }
    } else
      this.currentCompanySubject.next(undefined);
  }

  updateUser(user: User): Observable<any> {
    const url = `${this.apiUrl}/${pathconst.USER_ENDPOINT_PATH}/${user.email}`;
    return this.http.patch(url, user);
  }

  getUserApplications(userId?: string): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.apiUrl}/${pathconst.APPLICATION_ENDPOINT_PATH}/${pathconst.USER_ENDPOINT_PATH}/${userId}`);
  }

  changePassword(userId: string, currentPassword: string, newPassword: string): Observable<any> {
    const body = {
      currentPassword,
      newPassword
    };
    return this.http.patch(`${this.apiUrl}/${pathconst.USER_ENDPOINT_PATH}/${classpathoperations.CHANGE_USERPWD_BY_ID}/${userId}`, body);

  }

  // This route is used in user-settings components (profile) to navigate to the correct section
  navigateToSettingsSection(section: string) {
    this.router.navigate(['user-component/user-settings'], { fragment: section });
  }
}