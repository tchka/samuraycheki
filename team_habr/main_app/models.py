from django.conf import settings
from django.db import models
from slugify import slugify

import re

class SlugifyCheck:
    '''
    Класс-родитель

    Переопредяет метод .safe для контроля наличия и корректности слага
    '''
    def save(self, *args, **kwargs):
        """
        Переопределение метода Save класса CategoryPost
        При вызове метода save выполняется провекра - заполнено ли поле slug у данной категории.
        Если не заполнено, из поля "Наименование" категории генерируется slug
        Далее, метод выполяет сохранение данных в базе.
        """
        from django.db import IntegrityError

        if not self.slug:
            self.slug = slugify(self.title)

        while True:
            try:
                super().save(*args, **kwargs)
            # Assuming the IntegrityError is due to a slug fight
            except IntegrityError:
                match_obj = re.match(r'^(.*)-(\d+)$', self.slug)
                if match_obj:
                    next_int = int(match_obj.group(2)) + 1
                    self.slug = match_obj.group(1) + '-' + str(next_int)
                else:
                    self.slug += '-2'
            else:
                break


class Category(SlugifyCheck, models.Model):
    """Модель категории статей"""
    name = models.CharField('Категория', max_length=128)
    slug = models.SlugField('Слаг',
        allow_unicode=True,
        max_length=64,
        editable=False,
        unique=True)
    description = models.TextField('Описание')
    parent = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True, verbose_name='Родитель')
    is_active = models.BooleanField('Активна', default=True, db_index=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'
        ordering = ['name']


class Tag(SlugifyCheck, models.Model):
    """Модель тегов"""
    name = models.CharField('Тег', max_length=128)
    slug = models.SlugField('Слаг',
        allow_unicode=True,
        max_length=64,
        editable=False,
        unique=True)
    is_active = models.BooleanField('Активна', default=True, db_index=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Тег'
        verbose_name_plural = 'Теги'
        ordering = ['name']


class Article(SlugifyCheck, models.Model):
    """Модель статьи"""
    DRAFT = 'DR'
    WAITING = 'WT'
    APPROVED = 'AP'
    REJECTED = 'RJ'
    STATUS_CHOICES = (
        (DRAFT, 'Черновик'), (WAITING, 'Ожидает одобрения'), (APPROVED, 'Одобрена'), (REJECTED, 'Отклонена')
    )

    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, verbose_name='Категория')
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True)
    title = models.CharField('Статья', max_length=256)
    slug = models.SlugField('Слаг',
        allow_unicode=True,
        max_length=64,
        editable=False,
        unique=True)
    tags = models.ManyToManyField(Tag, verbose_name='Тег', blank=True)
    # , blank=True, null=True в poster надо убрать! postman не смог отправить файл
    # пришлось ограничить
    poster = models.ImageField('Постер', upload_to='posters/', blank=True, null=True)
    short_desc = models.CharField('Описание', max_length=512)
    text = models.TextField('Текст')
    status = models.CharField('Статус', max_length=2, choices=STATUS_CHOICES, default='DR')
    status_updated = models.DateTimeField('Обновлен', auto_now=True)
    date_create = models.DateTimeField('Создана', auto_now_add=True)
    date_update = models.DateTimeField('Обновлена', auto_now=True)
    is_active = models.BooleanField('Активна', default=True, db_index=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Статья'
        verbose_name_plural = 'Статьи'
        ordering = ['-date_update']


