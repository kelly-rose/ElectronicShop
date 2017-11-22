from rest_framework import serializers
from carts.mixins import TokenMixin

from .models import Order,UserBillingAddress,UserShippingAddress

class FinalizedOrderSerializer(TokenMixin, serializers.Serializer):
	order_token = serializers.CharField()
	payment_method_nonce = serializers.CharField()
	order_id =  serializers.IntegerField(required=False)
	user_checkout_id = serializers.CharField(required=False)
	cart_id =  serializers.IntegerField(required=False)



	def validate(self, data):
		order_token = data.get("order_token")
		order_data = self.parse_token(order_token)
		order_id = order_data.get("order_id")
		username = order_data.get("user_checkout_id")
		cart_id = order_data.get("cart_id")

		try:
			order_obj = Order.objects.get(id=order_id, user=username)
			data["order_id"] = order_id
			data["user_checkout_id"] = username
			data["cart_id"]=cart_id
		except:
			raise serializers.ValidationError("This is not a valid order for this user.")

		payment_method_nonce = data.get("payment_method_nonce")
		if payment_method_nonce == None:
			raise serializers.ValidationError("This is not a valid payment method nonce")

		return data

class UserBillingAddressSerializer(serializers.ModelSerializer):
	class Meta:
		model = UserBillingAddress
		fields = [
			"nick",
			"user",
			"street",
			"city",
			"zipcode",
			"checked"
		]

class UserShippingAddressSerializer(serializers.ModelSerializer):
	class Meta:
		model = UserShippingAddress
		fields = [
			"nick",
			"user",
			"street",
			"city",
			"zipcode",
			"checked"
		]

class OrderSerializer(serializers.ModelSerializer):
	subtotal = serializers.SerializerMethodField()
	user_shipping_address = serializers.SerializerMethodField()
	user_billing_address = serializers.SerializerMethodField()

	class Meta:
		model = Order
		fields = [
			"id",
			"status",
			"cart",	#show cartID
			"user",
			# "shipping_address",
			# "billing_address",
			"shipping_total_price",
			"subtotal",
			"order_total",
			"user_shipping_address",
			"user_billing_address"

		]

	def get_subtotal(self, obj):
		return obj.cart.subtotal

	def get_user_shipping_address(self, obj):
		return {
			"zipcode" : obj.shipping_address.zipcode,
			"nick":obj.shipping_address.nick,
			"city":obj.shipping_address.city,
			"state":obj.shipping_address.state,
			"street": obj.shipping_address.street,
			"checked": obj.shipping_address.checked,
		}

	def get_user_billing_address(self, obj):
		return {
			"zipcode" : obj.billing_address.zipcode,
			"nick":obj.billing_address.nick,
			"city":obj.billing_address.city,
			"state":obj.billing_address.state,
			"street": obj.billing_address.street,
			"checked": obj.billing_address.checked,
		}