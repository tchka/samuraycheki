from rest_framework import serializers

from auth_app.models import User


class UserListSerializer(serializers.ModelSerializer):
    """Список пользователей"""

    class Meta:
        model = User
        fields = ('user_name', 'first_name', 'last_name', 'email')


class UserDetailSerializer(serializers.ModelSerializer):
    """Детализированный список пользователей"""

    class Meta:
        model = User
        exclude = ('password', )
