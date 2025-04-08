from django.urls import path
from .views import (
    company_list, company_detail, company_vacancies,
    vacancy_list, vacancy_detail, top_ten_vacancies
)
from .class_views import (
    CompanyListView, CompanyDetailView, CompanyVacanciesView,
    VacancyListView, VacancyDetailView, TopTenVacanciesView
)

urlpatterns = [

    path('companies/', company_list, name='company_list'),
    path('companies/<int:id>/', company_detail, name='company_detail'),
    path('companies/<int:id>/vacancies/', company_vacancies, name='company_vacancies'),
    path('vacancies/', vacancy_list, name='vacancy_list'),
    path('vacancies/<int:id>/', vacancy_detail, name='vacancy_detail'),
    path('vacancies/top_ten/', top_ten_vacancies, name='top_ten_vacancies'),

    path('class/companies/', CompanyListView.as_view(), name='company_list_class'),
    path('class/companies/<int:id>/', CompanyDetailView.as_view(), name='company_detail_class'),
    path('class/companies/<int:id>/vacancies/', CompanyVacanciesView.as_view(), name='company_vacancies_class'),
    path('class/vacancies/', VacancyListView.as_view(), name='vacancy_list_class'),
    path('class/vacancies/<int:id>/', VacancyDetailView.as_view(), name='vacancy_detail_class'),
    path('class/vacancies/top_ten/', TopTenVacanciesView.as_view(), name='top_ten_vacancies_class'),
]