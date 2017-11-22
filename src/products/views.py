from django.db.models import Q

from django.views.generic.detail import DetailView
from django.views.generic.list import ListView
from django.utils import timezone

# Create your views here.


from .models import Product,Category

# API CBVS

from rest_framework import generics
from .serializers import CategorySerializer,ProductSerializer,ProductDetailSerializer
from .filters import ProductFilter
from rest_framework import filters

class ProductListAPIView(generics.ListAPIView):
	queryset = Product.objects.all()
	serializer_class = ProductSerializer
	filter_backends = [
					filters.SearchFilter,
					filters.OrderingFilter,
					filters.DjangoFilterBackend
					]
	search_fields = ["title", "description"]
	ordering_fields  = ["title", "id"]
	filter_class = ProductFilter
	#pagination_class = ProductPagination


class ProductRetrieveAPIView(generics.RetrieveAPIView):
	queryset = Product.objects.all()
	serializer_class = ProductDetailSerializer

class CategoryAPIListView(generics.ListAPIView):
	queryset = Category.objects.all()
	serializer_class = CategorySerializer

class CategoryRetrieveAPIView(generics.RetrieveAPIView):
	queryset = Category.objects.all()
	serializer_class = CategorySerializer
	lookup_field = 'slug'


# CBVs

class ProductListView(ListView):
	model = Product
	queryset = Product.objects.all()

#https://docs.djangoproject.com/en/1.8/ref/class-based-views/mixins-multiple-object/#django.views.generic.list.MultipleObjectMixin.get_context_data
	def get_context_data(self, *args, **kwargs):
		context = super(ProductListView, self).get_context_data(*args, **kwargs)
		context["now"] = timezone.now()
		context["query"] = self.request.GET.get("q")  # None
		return context

	# Lecture 17 - Search Query
	def get_queryset(self, *args, **kwargs):
		qs = super(ProductListView, self).get_queryset(*args, **kwargs)
		query = self.request.GET.get("q")
		if query:
			qs = self.model.objects.filter(
				Q(title__icontains=query) |
				Q(description__icontains=query)
			)
			try:
				qs2 = self.model.objects.filter(
					Q(price=query)
				)
				qs = (qs | qs2).distinct()
			except:
				pass
		return qs


import random
class ProductDetailView(DetailView):
	model = Product

	# Lecture 26 - Related Products
	def get_context_data(self, *args, **kwargs):
		context = super(ProductDetailView, self).get_context_data(*args, **kwargs)
		instance = self.get_object()
		print(instance)
		# context["related"] = Product.objects.get_related(instance).order_by("?")[:6]
		context["related"] = sorted(Product.objects.get_related(instance)[:6], key= lambda x: random.random())
		return context

# Lecture 25 - Category Detail View
class CategoryListView(ListView):
	model = Category
	queryset = Category.objects.all()
	template_name = "products/product_list.html"


class CategoryDetailView(DetailView):
	model = Category

	def get_context_data(self, *args, **kwargs):
		context = super(CategoryDetailView, self).get_context_data(*args, **kwargs)
		obj = self.get_object()
		product_set = obj.product_set.all()
		default_products = obj.default_category.all()
		products = ( product_set | default_products ).distinct()
		context["products"] = products
		return context