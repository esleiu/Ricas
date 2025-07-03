from django.db import models



class Candidato(models.Model):
    nome = models.CharField("Nome completo", max_length=200)
    email = models.EmailField("E‑mail", unique=True)
    telefone = models.CharField("Telefone", max_length=20, blank=True)
    data_nascimento = models.DateField("Data de nascimento", null=True, blank=True)
    idade = models.PositiveIntegerField("Idade")
    disponivel = models.BooleanField("Disponível para contratação", default=True)
    resumo = models.TextField("Resumo profissional", blank=True)
    experiencia = models.TextField("Experiência profissional", blank=True)
    def __str__(self):
        return f"{self.nome} ({self.idade} anos)"
