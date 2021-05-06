from django.urls import path
from .views import ArticleView, SingleArticleView

app_name = "main_app"
# app_name will help us do a reverse look-up latter.
urlpatterns = [
    path('tutorials/', ArticleView.as_view()),
    path('articles/', ArticleView.as_view()),
    #path('articles/', tutorial_list_published),
    path('articles/<slug:slug>', SingleArticleView.as_view()),
]