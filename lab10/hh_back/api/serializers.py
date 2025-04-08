from rest_framework import serializers
from .models import Company, Vacancy

class VacancySerializer(serializers.ModelSerializer):

    class Meta:
        model = Vacancy
        fields = ['id', 'name', 'description', 'salary', 'company']

class CompanySerializer(serializers.Serializer):
    vacancies = VacancySerializer(many=True, read_only=True)

    id = serializers.IntegerField()
    name = serializers.CharField(max_length=255)
    description = serializers.CharField()
    city = serializers.CharField(max_length=100)
    address = serializers.CharField()
