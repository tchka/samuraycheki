from rest_framework import serializers

from main_app.models import Category, Article

class CategoryListSerializer (serializers.ModelSerializer):
    """Список категорий"""

    class Meta:
        model = Category
        exclude = ('description', )


class CategoryDetailSerializer (serializers.ModelSerializer):
    """Категория с описанием"""

    class Meta:
        model = Category
        field = ('id', 'name', 'slug', 'description', 'parent', 'is_active')


class ArticleListSerializer(serializers.ModelSerializer):
    """Список статей

    Предположения:
    1. short_desc - краткое описание. text - полное описание, в которое войдёт short_desc.
    2. При выводе статьи на главной странице указываем дату последнего обновления статьи.
    Не дату создания
    3. Специфика DRF. Имеем связанное поле author, при формировании json будет подставлен
    id пользователя и поле автоматически примет имя 'author_id'. Его и указываем в перечне
    полей, если хотим получить id. В нашем случае тянем сразу имя
    4. На Хабре при выводе списка статей категория не выводится. На клавной странице
    выводятся все, а при выборе конкретной тематики в меню получаем список статей
    заданной категории. Категория отфильтровывается во вью. Поэтому тут категория не нужна
    """
    # связанные поля (пользователь) сразу вытаскиваем имя пользователя из связанной таблицы.
    # Есть метод SlugRelatedField для этого slug_field="username" - из какого поля получим значение
    # связанной таблицы.
    author = serializers.SlugRelatedField(slug_field="username", read_only=True)

    class Meta:
        model = Article
        fields = ('id', 'title', 'tags', 'poster', 'short_desc', 'date_update', 'author')

class ArticleDetailSerializer(serializers.ModelSerializer):
    '''
    Полная статья

    Предположения:
    1. Тут категория нужна, она выводится внизу статьи
    2. Огромный вопрос!!! На оригинальном сайте на одну статью идет несколько категорий.
    3. date_create у нас получается системная информация о первом вносе статьи,
    дата актуальной версии в date_update. В момент первого добавления даты совпадают. Поэтому
    date_create в выводе не нужна
    '''

    # связанные поля (категория и пользователь) сразу вытаскиваем название категории и
    # имя пользователя из связанных таблиц. Есть метод SlugRelatedField для этого
    # slug_field="name" - из какого поля получим значение связанной таблицы.
    # По идее, в каждой статье должно быть несколько категорий, поэтому на будущее
    # надо будет ставить для данного поля 'many=True'
    category = serializers.SlugRelatedField(slug_field="name", read_only=True)
    author = serializers.SlugRelatedField(slug_field="username", read_only=True)

    class Meta:
        model = Article
        exclude = ('short_desc', 'status', 'status_updated', 'date_create', 'is_active', )