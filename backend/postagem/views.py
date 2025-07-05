from rest_framework import viewsets
from .models import Postagem
from .serializers import PostagemSerializer

class PostagemViewSet(viewsets.ModelViewSet):
    queryset = Postagem.objects.all().order_by('-data_publicacao')
    serializer_class = PostagemSerializer
