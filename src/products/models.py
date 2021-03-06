from django.db import models
from django.core.urlresolvers import reverse
from django.db.models.signals import post_save
from django.utils.text import slugify

# Create your models here.
class ProductQuerySet(models.query.QuerySet):
	def active(self):
		return self.filter(active=True)


class ProductManager(models.Manager):
	def get_queryset(self):
		return ProductQuerySet(self.model, using=self._db)

	def all(self, *args, **kwargs):
		return self.get_queryset().active()

	# Lecture 26 - Related Products
	def get_related(self, instance):
		# show categories where the instance is in
		print(instance.categories.all())

		# show products matched with instance.categories.all() in Product
		products_one = self.get_queryset().filter(categories__in=instance.categories.all())
		print(products_one)
		products_two = self.get_queryset().filter(default=instance.default)

		qs = (products_one | products_two).exclude(id=instance.id).distinct()
		print(qs)
		return qs


class Product(models.Model):
	title = models.CharField(max_length=120)
	description = models.TextField(blank=True, null=True)
	price = models.DecimalField(decimal_places=2, max_digits=20)
	active = models.BooleanField(default=True)

	#Lecture 24 - Product Categories
	categories = models.ManyToManyField('Category', blank=True)
	default = models.ForeignKey('Category', related_name='default_category', null=True, blank=True)

	objects=ProductManager()

	def __unicode__(self): #def __str__(self):
		return self.title

    #later you can remove this. reverse(name in urls.py,kwargs)
	def get_absolute_url(self):
		return reverse("product_detail", kwargs={"pk": self.pk})

	# Lecture 27 - Distinct and Random QuerySets
	def get_image_url(self):
		img = self.productimage_set.first()
		if img:
			return img.image.url
		return img #None



class Variation(models.Model):
	product = models.ForeignKey(Product)
	title = models.CharField(max_length=120)
	price = models.DecimalField(decimal_places=2, max_digits=20)
	sale_price = models.DecimalField(decimal_places=2, max_digits=20, null=True, blank=True)
	active = models.BooleanField(default=True)
	inventory = models.IntegerField(null=True, blank=True)  # refer none == unlimited amount

	def __unicode__(self):
		return self.title

	def get_price(self):
		if self.sale_price is not None:
			return self.sale_price
		else:
			return self.price

	def get_absolute_url(self):
		return self.product.get_absolute_url()

def product_post_saved_receiver(sender, instance, created, *args, **kwargs):
	product = instance
	print product
	variations = product.variation_set.all()
	print variations
	print variations.count()
	if variations.count() == 0:
		new_var = Variation()
		new_var.product = product
		new_var.title = "Default"
		new_var.price = product.price
		new_var.save()

post_save.connect(product_post_saved_receiver, sender=Product)

# Product Images - Lecture 16:Image Uploads
def image_upload_to(instance, filename):
	title = instance.product.title
	slug = slugify(title)
	basename, file_extension = filename.split(".")
	new_filename = "%s-%s.%s" %(slug, instance.id, file_extension)
	return "assets/images/products/%s/%s" %(slug, new_filename)


class ProductImage(models.Model):
	product = models.ForeignKey(Product)
	image = models.ImageField(upload_to=image_upload_to)

	def __unicode__(self):
		return self.product.title

# Product Category
class Category(models.Model):
	title = models.CharField(max_length=120, unique=True)
	slug = models.SlugField(unique=True)
	description = models.TextField(null=True, blank=True)
	active = models.BooleanField(default=True)
	timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)

	def __unicode__(self):
		return self.title

	def get_absolute_url(self):
		return reverse("category_detail", kwargs={"slug": self.slug })