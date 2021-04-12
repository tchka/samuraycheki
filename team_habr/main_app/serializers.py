from rest_framework import serializers

from main_app.models import Category

class CategoryListSerializer (serializers.ModelSerializer):
    """Список категорий"""

    class Meta:
        model = Category
        exclude = ('description', )


class CategoryDetailSerializer (serializers.ModelSerializer):
    """Категория с описанием"""

    class Meta:
        model = Category
        field = ('name', 'slug', 'description', 'parent', 'is_active')