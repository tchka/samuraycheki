from django.conf import settings
from django.db import models
from slugify import slugify


class Category(models.Model):
    """Модель категории статей"""
    name = models.CharField('Категория', max_length=128)
    description = models.TextField('Описание')
    parent = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True,
                               verbose_name='Родитель', related_name='children')
    is_active = models.BooleanField('Активна', default=True, db_index=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'
        ordering = ['name']


class Tag(models.Model):
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

    def save(self, *args, **kwargs):
        """
        Переопределение метода Save класса CategoryPost
        При вызове метода save выполняется провекра - заполнено ли поле slug у данной категории.
        Если не заполнено, из поля "Наименование" категории генерируется slug
        Далее, метод выполяет сохранение данных в базе.
        """

        if not self.slug:
            self.slug = slugify(self.name)
        return super().save(*args, **kwargs)

    class Meta:
        verbose_name = 'Тег'
        verbose_name_plural = 'Теги'
        ordering = ['name']


class Article(models.Model):
    """Модель статьи"""
    DRAFT = 'DR'
    WAITING = 'WT'
    APPROVED = 'AP'
    REJECTED = 'RJ'
    NEED_FIX = 'NF'
    STATUS_CHOICES = (
        (DRAFT, 'Черновик'), (WAITING, 'Ожидает одобрения'), (APPROVED, 'Одобрена'), (REJECTED, 'Отклонена'),
        (NEED_FIX, 'Требует исправления')
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
    poster = models.ImageField('Постер', upload_to='posters/', null=True)
    short_desc = models.CharField('Описание', max_length=512)
    text = models.TextField('Текст')
    status = models.CharField('Статус', max_length=2, choices=STATUS_CHOICES, default='DR')
    status_updated = models.DateTimeField('Обновлен', auto_now=True)
    date_create = models.DateTimeField('Создана', auto_now_add=True)
    date_update = models.DateTimeField('Обновлена', auto_now=True)
    is_active = models.BooleanField('Активна', default=True, db_index=True)

    likes = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        verbose_name='Лайки от пользователей',
        related_name='like_articles'
    )
    likes_count = models.PositiveIntegerField('Количество лайков', default=0)
    dislikes = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        verbose_name='Дизлайки от пользователей',
        related_name='dislike_articles'
    )
    dislikes_count = models.PositiveIntegerField('Количество дизлайков', default=0)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        """
        Переопределение метода Save класса CategoryPost
        При вызове метода save выполняется провекра - заполнено ли поле slug у данной категории.
        Если не заполнено, из поля "Наименование" категории генерируется slug
        Далее, метод выполяет сохранение данных в базе.
        """

        if not self.slug:
            self.slug = slugify(self.title)
        return super().save(*args, **kwargs)

    class Meta:
        verbose_name = 'Статья'
        verbose_name_plural = 'Статьи'
        ordering = ['-date_update']


class Reviews(models.Model):
    """Отзывы пользователей о статье"""
    article = models.ForeignKey(Article, on_delete=models.CASCADE, verbose_name='Статья')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, verbose_name='Пользователь')
    parent = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True, verbose_name='Родитель')
    text = models.TextField('Отзыв')
    date_create = models.DateTimeField('Создана', auto_now_add=True)
    is_active = models.BooleanField('Активна', default=True, db_index=True)

    likes = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        verbose_name='Лайки от пользователей',
        related_name='like_reviews')
    likes_count = models.PositiveIntegerField('Количество лайков', default=0)
    dislikes = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        verbose_name='Дизлайки от пользователей',
        related_name='dislike_reviews'
    )
    dislikes_count = models.PositiveIntegerField('Количество дизлайков', default=0)

    def __str__(self):
        return f'{self.user.username} - {self.article}'

    class Meta:
        verbose_name = 'Отзыв'
        verbose_name_plural = 'Отзывы'


class Complaints(models.Model):
    """Жалобы пользователей"""
    ARTICLE = 'AT'
    COMMENT = 'CM'

    ENTITY_CHOICES = ((ARTICLE, 'Статья'), (COMMENT, 'Комментарий'))

    WAITING = 'WT'
    APPROVED = 'AP'
    REJECTED = 'RJ'

    STATUS_CHOICES = ((WAITING, 'Ожидает рассмотрения'), (APPROVED, 'Одобрена'), (REJECTED, 'Отклонена'))

    model = models.CharField('Модель', max_length=2, choices=ENTITY_CHOICES, default='AT')
    model_id = models.IntegerField('ID записи модели')
    text = models.TextField('Жалоба')
    answer = models.TextField('Ответ', blank=True)
    status = models.CharField('Статус', max_length=2, choices=STATUS_CHOICES, default='WT', db_index=True)

    def __str__(self):
        return f'{self.pk} - {self.model}'

    class Meta:
        verbose_name = 'Жалоба'
        verbose_name_plural = 'Жалобы'
