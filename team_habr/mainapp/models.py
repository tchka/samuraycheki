from django.db import models
from django.urls import reverse
from django.conf import settings
from authapp.models import User
import datetime
from slugify import slugify


class CategoryPost(models.Model):
    """
    Класс модели перечня категорий статей.
    Класс наследуется от встроенного класса Model.
    Задаются поля таблицы базы данных:
    name - наименование категории
    slug - слаг наименования категории,
    is_active - булевое значение активности категорииЖ
        True - категория активна
        False - категория не активка
    """

    name = models.CharField(
        verbose_name='Категория',
        max_length=30,
        unique=True)
    slug = models.SlugField(
        allow_unicode=True,
        max_length=64,
        editable=False,
        unique=True)
    description = models.TextField(verbose_name='Описание', max_length=64)
    is_active = models.BooleanField(default=True)

    def str(self):
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
        """
        Вложенный класс Meta определяет наименование полей формы в разделе администрирования,
        а также принцип сортировки вывода списка категорий (по наименованию, по возрастанию)
        """

        verbose_name_plural = 'Категории'
        verbose_name = 'Категория'
        ordering = ['name']

    def get_absolute_url(self):
        """
        Метод генерирует абсолютный путь для получения url через слаги.
        """

        return reverse("by_category", kwargs={"slug": self.slug})

    def count_all_post(self):
        return Post.objects.filter(category_id_id=self.pk).count()


class Post(models.Model):
    """
    Класс модели статей.
    Класс наследуется от встроенного класса Model.
    Задаются поля таблицы базы данных:
    category_id - ID категории статьи,
    user_id - ID пользователя - автора статьи,
    title - заголовок статьи
    slug - слаг статьи
    text - текст статьи
    post_status - статут статьи, выбирается из списка, задаваемого переменной CHOICES_STATUS
    status_update - дата и время последнего изменения статуса статьи
    date_create - дата и время создания статьи
    date_update - дата и встемя любого последнего изменения статьи
    """

    CHOICES_STATUS = [('Aip', 'Ждет одобрения'), ('Apr', 'Одобрено'),
                      ('Del', 'Удалено'), ('Can', 'Отклоненая'), ('Drf', 'Черновик')]
    category_id = models.ForeignKey(
        CategoryPost,
        on_delete=models.CASCADE,
        verbose_name='Категория')
    user_id = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE)
    title = models.CharField(verbose_name='Заголовок', max_length=64)
    slug = models.SlugField(
        allow_unicode=True,
        max_length=64,
        editable=False,
        unique=True)
    short_text = models.TextField(
        verbose_name='Краткое содержание',
        default='Short_description'
    )
    text = models.TextField(
        verbose_name='Содержание',
        default='Full_description')
    post_status = models.CharField(
        max_length=3,
        choices=CHOICES_STATUS,
        default='Drf')
    image = models.ImageField(
        verbose_name='Картинка',
        upload_to='products_images',
        blank=True)
    status_update = models.DateTimeField(
        verbose_name='Дата обновления статуса',
        default=datetime.datetime.today)
    date_create = models.DateTimeField(
        verbose_name='Дата создания статьи',
        default=datetime.datetime.today)
    date_update = models.DateTimeField(
        verbose_name='Дата изменения статьи',
        default=datetime.datetime.today)

    @property
    def post_updated(self):
        """
        Свойство для определения, был ли обновлен пост. Если сравнивать date_update и date_create,
        получается разница  8e-06 секунд - и Django фиксирует обновление.
        В данном методе, передаваемом в шаблон, пост считается обновленным, если date_update > date_create на 10 сек
        """
        return (self.date_update - self.date_create).total_seconds() > 10

    def str(self):
        """
        Переопределения метода str.
        При вызове команды print метод выводит текст статьи, имя категории и имя автора.
        """
        return f'{self.text} ({self.category_id.name}) by {self.user_id.name}'

    def save(self, *args, **kwargs):
        """
        Переопределение метода save для генерации и записи слага названия статьи
        При вызове метода выполняется проверка наличия слага в базе данных. Если запись отсутствует,
        создается слаг, который помещается в поле salu, после чего данные сохраняются в базе данных
        """
        if not self.slug:
            self.slug = slugify(self.title)
        return super().save(*args, **kwargs)

    class Meta:
        """
        Вложенный класс, определяет вид заголовков формы статей в разделе администрирования и
        определяет порядок сортироки при выводе перечня статей (по убыванию даты создания)
        """
        verbose_name_plural = 'Статьи'
        verbose_name = 'Статья'
        ordering = ['-date_create']

    def get_absolute_url(self):
        """
        Метод генерирует абсолютный путь для получения url через слаги.
        """
        return reverse(
            "post",
            kwargs={
                "slug": self.slug,
                "category_slug": self.category_id.name})

    def get_count_post(self):
        return Like.objects.filter(post_id_id=self.pk).count()

    def get_count_user(self):
        return Like.objects.filter(user_id_id=self.user_id.pk).count()

    def count_all_comment(self):
        return Comment.objects.filter(post_id_id=self.pk).count()

    def get_reason(self):
        return Reason.objects.filter(post_id_id=self.pk)


class Comment(models.Model):
    """
    Класс модели комментариев.
    Класс наследуется от встроенного класса Model.
    Задаются поля таблицы базы данных:
    user_id - ID пользователя
    post_id - ID статьи
    parent_comment - 'родительский' комментарий, к которому относится данный комментарий
    (поле будет пустым, если комментируется статья, а не комментарий)
    text
    date_create - дата и время созадния статьи
    date_update - дата и время последнего изменения статьи
    """

    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE)
    parent_comment = models.ForeignKey(
        'self',
        null=True,
        blank=True,
        related_name='ответы',
        on_delete=models.CASCADE)
    text = models.TextField(verbose_name='Комментарий')
    date_create = models.DateTimeField(
        verbose_name='Дата создания комментария',
        default=datetime.datetime.today)
    date_update = models.DateTimeField(
        verbose_name='Дата изменения комментария',
        default=datetime.datetime.today)
    comment_status = models.CharField(
        verbose_name='Статус комментария',
        max_length=3,
        null=True,
        blank=True
    )

    def str(self):
        """
        Переопределения метода str.
        При вызове команды print метод выводит текст комментария, имя автора и наименование комментируемой статьи.
        """
        return f'{self.text} by {self.user_id.name} ({self.post_id.title})'

    def get_review(self):
        return Comment.objects.filter(parent_comment_id=self.pk)

    def get_count_comment(self):
        return Like.objects.filter(comment_id_id=self.pk).count()


class Like(models.Model):
    """
    Класс модели Лайков.
    Класс наследуется от встроенного класса Model.
    Задаются поля таблицы базы данных:
    author_user_id - ID автора статьи, получающего лайк
    user_id - ID пользователя, ставящего лайк
    post_id - ID поста, которому ставится лайк
    comm
ent_id - ID комментарию, которому ставится лайт
    date_create - дата создания лайка
    date_update - дата последнего изменения лайка
    """

    author_user_id = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='Author_like')
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, default=None,
        null=True,
        blank=True)
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE, default=None,
        null=True,
        blank=True)
    comment_id = models.ForeignKey(
        Comment, on_delete=models.CASCADE, default=None,
        null=True,
        blank=True)
    date_create = models.DateTimeField(default=datetime.datetime.today)
    date_update = models.DateTimeField(default=datetime.datetime.today)


class Reason(models.Model):
    user_id = models.ForeignKey(
        User, on_delete=models.CASCADE)
    post_id = models.ForeignKey(
        Post, on_delete=models.CASCADE)
    text = models.TextField(
        verbose_name="причина отклонения",
        max_length=512, blank=False)
    date_create = models.DateTimeField(
        default=datetime.datetime.today)