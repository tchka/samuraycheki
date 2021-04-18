from django.urls import path
from rest_framework.routers import SimpleRouter

from .views import ArticleView, SingleArticleView, CategoryViewSet

app_name = "main_app"
# app_name will help us do a reverse look-up latter.

router = SimpleRouter()
router.register(r'category', CategoryViewSet)

urlpatterns = [
    path('articles/', ArticleView.as_view()),
    path('articles/<int:pk>', SingleArticleView.as_view()),
]
urlpatterns += router.urls
