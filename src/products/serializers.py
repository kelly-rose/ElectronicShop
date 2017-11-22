from rest_framework import serializers


from .models import Category,Product,Variation

class VariationSerializer(serializers.ModelSerializer):
	class Meta:
		model = Variation

class ProductDetailSerializer(serializers.ModelSerializer):
	variation_set = VariationSerializer(many=True, read_only=True)
	image = serializers.SerializerMethodField()
	class Meta:
		model = Product
		fields = [
			"id",
			"title",
			"description",
			"price",
			"image",
			# "active",
			# "defalut",
			# "categories",
			"variation_set",
		]

	def get_image(self, obj):
		return obj.productimage_set.first().image.url

class ProductSerializer(serializers.ModelSerializer):
	url = serializers.HyperlinkedIdentityField(view_name='products_detail_api')
	variation_set = VariationSerializer(many=True)
	image = serializers.SerializerMethodField()
	class Meta:
		model = Product
		fields = [
			"url",
			"id",
			"title",
			"price",
			"description",
			"image",
			"active",
			"default",
			"categories",

			"variation_set",
		]

	def get_image(self, obj):
		try:
			return obj.productimage_set.first().image.url
		except:
			return None

class CategorySerializer(serializers.ModelSerializer):
	# http://www.django-rest-framework.org/api-guide/relations/
	url = serializers.HyperlinkedIdentityField(view_name='category_detail_api',lookup_field='slug')
	product_set = ProductSerializer(many=True)
	class Meta:
		model = Category
		fields = [
			"url",
			"id",
			"slug",
			"title",
			"description",
			"active",
			"timestamp",
			"product_set", ## obj.product_set.all()
			# "default_category",
		]



#CREATE RETRIEVE UPDATE DESTROY