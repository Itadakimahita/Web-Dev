import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models';
import { VacancyListComponent } from '../vacancy-list/vacancy-list.component';
import { CommonModule } from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'app-company-list',
  imports: [VacancyListComponent, CommonModule],
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  selectedCompany: Company | null = null;

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  selectCompany(company: Company): void {
    console.log(this.selectedCompany);
    this.selectedCompany = company;
  }
}