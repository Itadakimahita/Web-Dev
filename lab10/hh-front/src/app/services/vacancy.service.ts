import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from '../models';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  getVacanciesByCompany(companyId: number): Observable<Vacancy[]> {
    console.log(`${this.BASE_URL}/api/companies/${companyId}/vacancies/`)
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${companyId}/vacancies/`);
  }
}