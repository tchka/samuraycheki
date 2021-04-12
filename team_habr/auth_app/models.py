from django.conf import settings
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save
from django.dispatch import receiver


class User(AbstractUser):
    """Расширение стандартной модели пользователя"""
    email = models.EmailField(unique=True)

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'

    def __str__(self):
        return f'Profile - {self.username}'


class UserProfile(models.Model):
    """Модель профиля пользователя"""
    MALE = 'M'
    FEMALE = 'F'
    GENDER_CHOICES = ((MALE, 'М'), (FEMALE, 'Ж'))

    user = models.OneToOneField(settings.AUTH_USER_MODEL, unique=True, null=False, db_index=True,
                                on_delete=models.CASCADE)
    gender = models.CharField('Пол', max_length=1, choices=GENDER_CHOICES)
    date_of_birth = models.DateTimeField('Дата рождение', blank=True, null=True)
    avatar = models.ImageField('Аватар', upload_to='avatars/', default='avatar/default_avatar.jpg')

    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            UserProfile.objects.create(user=instance)

    @receiver(post_save, sender=User)
    def save_user_profile(sender, instance, **kwargs):
        instance.userprofile.save()

    class Meta:
        verbose_name = 'Профайл'
        verbose_name_plural = 'Профайлы'

    def __str__(self):
        return f'Profile - {self.user}'
