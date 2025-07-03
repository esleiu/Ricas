from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Candidato
from .serializers import CandidatoSerializer

class CandidatoViewSet(viewsets.ModelViewSet):
    queryset = Candidato.objects.all().order_by('id')
    serializer_class = CandidatoSerializer