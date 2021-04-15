from django.conf import settings
from djoser.permissions import CurrentUserOrAdminOrReadOnly
from rest_framework import permissions
from rest_framework.generics import get_object_or_404
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from .models import Article, Category
from auth_app.models import User
from .serializers import ArticleDetailSerializer, ArticleListSerializer


class ArticleView(ListCreateAPIView):
    '''
    Класс ListCreateAPIView автоматически создает методы get и post
    '''
    queryset = Article.objects.all()
    serializer_class = ArticleListSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    # Поскольку при создании новой записи мы не указываем\выбираем автора, он должен подставиться
    # автоматически, то будет выпадать ошибка, что author_id не может быть NULL.
    # Поэтому в каждом post запросе используем параметр author_id и используем его для получения
    # соответствующего автора из базы.
    def perform_create(self, serializer):
        # settings.AUTH_USER_MODEL = 'auth_app.User'
        category = get_object_or_404(Category, id=self.request.data.get('category'))
        author = get_object_or_404(settings.AUTH_USER_MODEL, id=self.request.data.get('author'))
        return serializer.save(author=author, category=category)


class SingleArticleView(RetrieveUpdateDestroyAPIView):
    '''
    Класс RetrieveUpdateDestroyAPIView автоматически создает методы get, update и delete конкретной
    статьи
    '''
    queryset = Article.objects.all()
    serializer_class = ArticleDetailSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
