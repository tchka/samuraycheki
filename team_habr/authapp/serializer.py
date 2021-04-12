from rest_framework import serializers

from authapp.models import User


class UserListSerializer(serializers.ModelSerializer):
    """Список пользователей"""

    class Meta:
        model = User
        fields = ('user_name', 'first_name', 'last_name', 'email')


class CategoryDetailSerializer(serializers.ModelSerializer):
    """Детализированный список пользователей"""

    class Meta:
        model = User
        exclude = ('password', )
