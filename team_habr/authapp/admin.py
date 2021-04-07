from django.contrib import admin
from mainapp.models import CategoryPost, Post, Comment, Like, Reason

admin.site.register(CategoryPost)
admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(Like)
admin.site.register(Reason)
