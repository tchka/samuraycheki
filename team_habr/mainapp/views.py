from django.shortcuts import render

titles = {
    'main': 'Лучшие публикации за сутки',
    'design': 'Все публикации в потоке Дизайн',
    'web': 'Все публикации в потоке WEB-разработка',
    'mobile': 'Все публикации в потоке Мобильная-разработка',
    'marketing': 'Все публикации в потоке Маркетинг',
}

links_menu = [
    {'href': 'main', 'name': 'Все потоки'},
    {'href': 'design', 'name': 'Дизайн'},
    {'href': 'web', 'name': 'WEB-разработка'},
    {'href': 'mobile', 'name': 'Мобильная-разработка'},
    {'href': 'marketing', 'name': 'Маркетинг'},
]
def main(request):
    content = {'title': titles['main'], 'links': links_menu}
    return render(request, 'mainapp/index.html', context=content)


def design(request):
    content = {'title': titles['design'], 'links': links_menu}
    return render(request, 'mainapp/design.html', context=content)


def web(request):
    content = {'title': titles['web'], 'links': links_menu}
    return render(request, 'mainapp/web.html', context=content)


def mobile(request):
    content = {'title': titles['mobile'], 'links': links_menu}
    return render(request, 'mainapp/mobile.html', context=content)


def marketing(request):
    content = {'title': titles['marketing'], 'links': links_menu}
    return render(request, 'mainapp/marketing.html', context=content)

def login(request):
    content = {'title': titles['login'], 'links': links_menu}
    return render(request, 'mainapp/login.html', context=content)

def register(request):
    content = {'title': titles['register'], 'links': links_menu}
    return render(request, 'mainapp/register.html', context=content)
