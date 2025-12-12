import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job, JobOffer } from '../Model/job-offer';
import { environment, pathconst } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = environment.apiUrl;
  private jobEndpoint = pathconst.JOB_ENDPOINT_PATH;

  constructor(private http: HttpClient) {}

  createJob(job: Job): Observable<JobOffer> {
    return this.http.post<JobOffer>(`${this.apiUrl}/${this.jobEndpoint}`, job);
  }

  getJobs(): Observable<JobOffer[]> {
    const storedToken = localStorage.getItem('currentUserToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${storedToken}`
    });
    return this.http.get<JobOffer[]>(`${this.apiUrl}/${this.jobEndpoint}`, { headers });
  }

  getJobById(id: string): Observable<JobOffer> {
    return this.http.get<JobOffer>(`${this.apiUrl}/${this.jobEndpoint}/findjobbyid/${id}`);
  }

  updateJob(id: string, job: Job): Observable<JobOffer> {
    return this.http.patch<JobOffer>(`${this.apiUrl}/${this.jobEndpoint}/${id}`, job);
  }

  deleteJob(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${this.jobEndpoint}/${id}`);
  }
}
