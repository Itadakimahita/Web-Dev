import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { VacancyService } from '../../services/vacancy.service';
import { Vacancy } from '../../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacancy-list',
  imports: [CommonModule],
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnChanges {
  @Input() companyId: number | undefined;
  vacancies: Vacancy[] = [];
  

  constructor(private vacancyService: VacancyService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.companyId){
      this.vacancyService.getVacanciesByCompany(this.companyId as number).subscribe(data => {
        this.vacancies = data;
      });
      console.log(this.vacancies)
    }
  }
}