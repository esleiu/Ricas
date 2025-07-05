from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import PostagemViewSet

router = DefaultRouter()
router.register(r'postagens', PostagemViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
