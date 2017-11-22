from django.conf.urls import url

from .views import CategoryListView, CategoryDetailView

urlpatterns = [
    #http://localhost:8000/categories
    url(r'^$', CategoryListView.as_view(), name='categories'),

    #http://localhost:8000/categories/accessories/
    url(r'^(?P<slug>[\w-]+)/$', CategoryDetailView.as_view(), name='category_detail'),
]