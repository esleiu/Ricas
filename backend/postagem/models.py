from django.db import models

class Postagem(models.Model):
    autora = models.CharField("Autora", max_length=100)
    conteudo = models.TextField("Conteúdo")
    resumo = models.CharField("Resumo", max_length=255, blank=True)
    categoria = models.CharField("Categoria", max_length=100, blank=True)
    data_publicacao = models.DateField("Data de Publicação", auto_now_add=True)
    curtidas = models.PositiveIntegerField("Curtidas", default=0)
    em_destaque = models.BooleanField("Em destaque", default=False)

    def __str__(self):
        return f"{self.autora} - {self.resumo or self.categoria or 'Postagem'}"
