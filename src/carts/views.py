import ast
import base64
import braintree

from django.conf import settings
from django.contrib import messages
from django.contrib.auth.forms import AuthenticationForm
from django.core.urlresolvers import reverse
from django.http import HttpResponseRedirect, Http404, JsonResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic.base import View
from django.views.generic.detail import SingleObjectMixin, DetailView
from django.views.generic.edit import FormMixin

from rest_framework import filters
from rest_framework import generics
from rest_framework import status
from rest_framework.authentication import BasicAuthentication, SessionAuthentication
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.reverse import reverse as api_reverse
from rest_framework.views import APIView

# from orders.forms import GuestCheckoutForm
# from orders.mixins import CartOrderMixin
# from orders.models import UserCheckout, Order, UserAddress
from orders.models import Order

from products.models import Variation

from .mixins import TokenMixin, CartUpdateAPIMixin,CartTokenMixin,CartTokenMixin2
from .models import Cart, CartItem
from .serializers import CartItemSerializer
from orders.serializers import OrderSerializer, FinalizedOrderSerializer
from orders.models import UserShippingAddress,UserBillingAddress,UserCheckout

import json
# class CheckoutAPIView(TokenMixin, APIView):
# 	def get(self, request, format=None):
# 		cart_token = request.GET.get("cart_token")
# 		message = "This requires a vaild cart & cart token."
#
# 		cart_token_data = self.parse_token(cart_token)
# 		cart_id = cart_token_data.get("cart_id")
# 		try:
# 			cart = Cart.objects.get(id=int(cart_id))
# 		except:
# 			cart = None
#
# 		if cart == None:
# 			data = {
# 				"success": False,
# 				"message": message,
# 			}
# 			return Response(data, status=status.HTTP_400_BAD_REQUEST)
# 		else:
# 			items = CartItemSerializer(cart.cartitem_set.all(), many=True)
#
# 			data = {
# 				"cart": cart.id,
# 				"total": cart.total,
# 				"subtotal": cart.subtotal,
# 				"tax_total": cart.tax_total,
# 				"count": cart.items.count(),
# 				"items": items.data,
# 				"success": True,
# 			}
# 			return Response(data)


# find and user, addr

class CheckoutFinalizeAPIView(TokenMixin, APIView):
	def get(self, request, format=None):
		response = {}
		order_token = request.GET.get('order_token')
		if order_token:
			checkout_id = self.parse_token(order_token).get("user_checkout_id")
			if checkout_id:
				checkout = UserCheckout.objects.get(id=checkout_id)
				client_token = checkout.get_client_token()
				response["client_token"] = client_token
				return Response(response)
		else:
			response["message"] = "This method is not allowed"
			return Response(response, status=status.HTTP_405_METHOD_NOT_ALLOWED)

	def post(self, request, format=None):
		data = request.data
		response = {}
		serializer = FinalizedOrderSerializer(data=data)
		if serializer.is_valid(raise_exception=True):
			request_data = serializer.data
			order_id = request_data.get("order_id")
			cart_id = request_data.get("cart_id")
			cart= Cart.objects.get(id=cart_id)
			order = Order.objects.get(id=order_id)
			if not order.is_complete:
				order_total = order.order_total
				nonce = request_data.get("payment_method_nonce")
				if nonce:
					result = braintree.Transaction.sale({
						"amount": order_total,
						"payment_method_nonce": nonce,
						"billing": {
							"postal_code": "%s" % (order.billing_address.zipcode),

						},
						"options": {
							"submit_for_settlement": True
						}
					})
					success = result.is_success
					if success:
						# result.transaction.id to order
						order.mark_completed(order_id=result.transaction.id)
						# order.mark_completed(order_id="abc12344423")
						order.cart.is_complete()
						response["message"] = "Your order has been completed."
						response["final_order_id"] = order.order_id
						response["success"] = True

						cart.active=False
						cart.save()
					else:
						# messages.success(request, "There was a problem with your order.")
						error_message = result.message
						# error_message = "Error"
						response["message"] = error_message
						response["success"] = False
			else:
				response["message"] = "Ordered has already been completed."
				response["success"] = False

		return Response(response)


class CheckoutAPIView(CartTokenMixin2,TokenMixin, APIView):

	def post(self, request, format=None):
		post_data = json.loads(request.body)
		print post_data

		# data = request.data
		# print data
		username = post_data['username']
		billing_addr = UserBillingAddress.objects.get(user=username, checked=True)
		shipping_addr = UserShippingAddress.objects.get(user=username, checked=True)

		data, cart_obj, response_status = self.get_cart_from_token()

		if cart_obj:
			if cart_obj.items.count() == 0:
				data = {
					"message": "Your cart is Empty."
				}
				response_status = status.HTTP_400_BAD_REQUEST
			else:
				items = CartItemSerializer(cart_obj.cartitem_set.all(), many=True)

				user_checkout, created = UserCheckout.objects.get_or_create(email=username, )
				user_checkout.user = username
				user_checkout.save()
				client_token = user_checkout.get_client_token()

				order, created = Order.objects.get_or_create(billing_address=billing_addr, user=username, cart=cart_obj,
															 shipping_address=shipping_addr)
				if order.is_complete:
					order.cart.is_complete()
					data = {
						"message": "This order has been completed."
					}
					return Response(data)
				order.save()

				order_data = {
					"order_id": order.id,
					"user_checkout_id": username,
					"cart_id":cart_obj.id
				}
				order_token = self.create_token(order_data)

				data = OrderSerializer(order).data
				data["items"] = items.data
				data["client_token"] = client_token
				data["order_token"] = order_token

		return Response(data, status=response_status)

	# def get(self, request, format=None):
	# 	username = self.request.GET.get("username")
	# 	# username="h.siri1205@gmail.com"
	# 	billing_addr = UserBillingAddress.objects.get(user=username, checked=True)
	# 	shipping_addr= UserShippingAddress.objects.get(user=username, checked=True)
    #
	# 	data, cart_obj, response_status = self.get_cart_from_token()
    #
	# 	if cart_obj:
	# 		if cart_obj.items.count() == 0:
	# 			data = {
	# 				"message": "Your cart is Empty."
	# 			}
	# 			response_status = status.HTTP_400_BAD_REQUEST
	# 		else:
	# 			items = CartItemSerializer(cart_obj.cartitem_set.all(), many=True)
    #
	# 			user_checkout, created = UserCheckout.objects.get_or_create(email=username,)
	# 			user_checkout.user= username
	# 			user_checkout.save()
	# 			client_token=user_checkout.get_client_token()
    #
    #
	# 			order, created = Order.objects.get_or_create(billing_address=billing_addr,user=username,cart=cart_obj,shipping_address=shipping_addr)
	# 			if order.is_complete:
	# 				order.cart.is_complete()
	# 				data = {
	# 					"message": "This order has been completed."
	# 				}
	# 				return Response(data)
	# 			order.save()
	# 			data= OrderSerializer(order).data
	# 			data["items"]=items.data
	# 			data["client_token"]=client_token
    #
	# 	return Response(data, status=response_status)



# class CartAPIView(TokenMixin, CartUpdateAPIMixin, APIView):
# 	# authentication_classes = [SessionAuthentication]
# 	# permission_classes = [IsAuthenticated]
# 	cart = None
#
# 	def get_cart(self):
# 		token_data = self.request.GET.get("token")
# 		cart_obj = None
# 		if token_data:
# 			token_dict = self.parse_token(token=token_data)
# 			cart_id = token_dict.get("cart_id")
# 			try:
# 				cart_obj = Cart.objects.get(id=cart_id)
# 			except:
# 				pass
# 			self.token = token_data
#
# 		if cart_obj == None:
# 			cart = Cart()
# 			cart.tax_percentage = 0.075
# 			if self.request.user.is_authenticated():
# 				cart.user = self.request.user
# 			cart.save()
# 			data = {
# 				"cart_id": str(cart.id)
# 			}
# 			self.create_token(data)
# 			cart_obj = cart
#
# 		return cart_obj
#
# 	def get(self, request, format=None):
# 		cart = self.get_cart()
# 		self.cart = cart
# 		self.update_cart()
# 		# token = self.create_token(cart.id)
# 		items = CartItemSerializer(cart.cartitem_set.all(), many=True)
# 		print cart.items.all()
# 		data = {
# 			"token": self.token,
# 			"cart": cart.id,
# 			"total": cart.total,
# 			"subtotal": cart.subtotal,
# 			"tax_total": cart.tax_total,
# 			"count": cart.items.count(),
# 			"items": items.data,
# 		}
# 		return Response(data)
class CartAPIView(CartTokenMixin, CartUpdateAPIMixin, APIView):
	# authentication_classes = [SessionAuthentication]
	# permission_classes = [IsAuthenticated]
	token_param = "token"
	cart = None
	def get_cart(self):
		data, cart_obj, response_status = self.get_cart_from_token()
		#http://localhost:8000/api/cart/?item=1&qty=2
		if cart_obj == None or not cart_obj.active:
			cart = Cart()
			cart.tax_percentage = 0.075
			user = self.request.GET.get("username")

			if user:
				cart.user = user
			cart.save()
			data = {
				"cart_id": str(cart.id)
			}
			self.create_token(data)
			cart_obj = cart

		return cart_obj


	def get(self, request, format=None):
		cart = self.get_cart()
		self.cart = cart
		self.update_cart()
		#token = self.create_token(cart.id)
		items = CartItemSerializer(cart.cartitem_set.all(), many=True)
		print cart.items.all()
		data = {
			"token": self.token,
			"cart" : cart.id,
			"total": cart.total,
			"subtotal": cart.subtotal,
			"tax_total": cart.tax_total,
			"count": cart.items.count(),
			"items": items.data,
		}
		return Response(data)

# class CartAPIView(APIView):
# 	# authentication_classes = [SessionAuthentication]
# 	# permission_classes = [IsAuthenticated]
#
# 	def create_token(self,cart_id):
# 		data={
# 			"cart_id":cart_id
# 		}
# 		token = base64.b64encode(str(data))
# 		return token
#
# 	def get_cart(self):
# 		cart_id = self.request.GET.get("cart_id")
# 		token_data = self.request.GET.get("token")
# 		if token_data:
# 			token_decoded = base64.b64decode(token_data)
# 			token_dict = ast.literal_eval(token_decoded)
# 			print token_dict
# 			cart_id=token_dict.get(cart_id)
# 			print cart_id
# 		try:
# 			cart = Cart.objects.get(id=cart_id)
# 		except:
# 			print ('No matching CartID')
# 			cart = Cart.objects.all().first()
# 		return cart
#
#
# 	def get(self, request, format=None):
# 		cart = self.get_cart()
# 		token = self.create_token(cart.id)
# 		items = CartItemSerializer(cart.cartitem_set.all(), many=True)
# 		data = {
# 			"token":token,
# 			"cart" : cart.id,
# 			"total": cart.total,
# 			"subtotal": cart.subtotal,
# 			"tax_total": cart.tax_total,
# 			"count": cart.items.count(),
# 			"items": items.data,
# 		}
# 		return Response(data)

# class CartAPIView(CartUpdateAPIMixin,APIView):
# 	# authentication_classes = [SessionAuthentication]
# 	# permission_classes = [IsAuthenticated]
#
# 	token = None
# 	cart = None
#
# 	def create_token(self, cart_id):
# 		data = {
# 			"cart_id": cart_id
# 		}
# 		token = base64.b64encode(str(data))
# 		self.token = token
# 		return token
#
# 	def get_cart(self):
# 		token_data = self.request.GET.get("token")
# 		cart_obj = None
# 		if token_data:
# 			try:
# 				token_decoded = base64.b64decode(token_data)
# 				token_dict = ast.literal_eval(token_decoded)
# 				cart_id = token_dict.get("cart_id")
# 			except:
# 				print "No Matching Token data and cart_id"
# 			try:
# 				cart_obj = Cart.objects.get(id=cart_id)
#
# 			except:
# 				pass
# 			self.token = token_data
#
# 		if cart_obj == None:
# 			cart = Cart()
# 			cart.tax_percentage = 0.075
# 			if self.request.user.is_authenticated():
# 				cart.user = self.request.user
# 			cart.save()
# 			self.create_token(cart.id)
# 			cart_obj = cart
#
# 		return cart_obj
#
#
# 	def get(self, request, format=None):
# 		cart = self.get_cart()
# 		self.cart = cart
#
# 		#mixin part
# 		self.update_cart()
#
# 		items = CartItemSerializer(cart.cartitem_set.all(), many=True)
# 		data = {
# 			"token":self.token,
# 			"cart" : cart.id,
# 			"total": cart.total,
# 			"subtotal": cart.subtotal,
# 			"tax_total": cart.tax_total,
# 			"count": cart.items.count(),
# 			"items": items.data,
# 		}
# 		return Response(data)


if settings.DEBUG:
	braintree.Configuration.configure(braintree.Environment.Sandbox,
      merchant_id=settings.BRAINTREE_MERCHANT_ID,
      public_key=settings.BRAINTREE_PUBLIC,
      private_key=settings.BRAINTREE_PRIVATE)

class CartView(SingleObjectMixin, View):
	model = Cart
	template_name = "carts/view.html"

	def get_object(self, *args, **kwargs):
		self.request.session.set_expiry(0) #5 minutes
		cart_id = self.request.session.get("cart_id")
		if cart_id == None:
			cart = Cart()
			cart.save()
			cart_id = cart.id
			self.request.session["cart_id"] = cart_id
		cart = Cart.objects.get(id=cart_id)

		#here is user  check
		if self.request.user.is_authenticated():
			cart.user = self.request.user
			cart.save()
		return cart

	def get(self, request, *args, **kwargs):
		cart = self.get_object()
		item_id = request.GET.get("item")
		delete_item = request.GET.get("delete")
		if item_id:
			item_instance = get_object_or_404(Variation, id=item_id)
			qty = request.GET.get("qty")
			cart_item = CartItem.objects.get_or_create(cart=cart, item=item_instance)[0]
			if delete_item:
				cart_item.delete()
			else:
				cart_item.quantity = qty
				cart_item.save()
		context = {
			"object": self.get_object()
		}
		template = self.template_name
		return render(request, template, context)




# class CartView(View):
# 	def get(self, request, *args, **kwargs):
# 		request.session.set_expiry(0) #5 minutes
# 		cart_id = request.session.get("cart_id")
# 		if cart_id == None:
# 			cart = Cart()
# 			cart.save()
# 			cart_id = cart.id
# 			request.session["cart_id"] = cart_id
# 		cart = Cart.objects.get(id=cart_id)
# 		if request.user.is_authenticated():
# 			cart.user = request.user
# 			cart.save()
# 		item_id = request.GET.get("item")
# 		delete_item = request.GET.get("delete")
# 		if item_id:
# 			item_instance = get_object_or_404(Variation, id=item_id)
# 			qty = request.GET.get("qty")
# 			cart_item = CartItem.objects.get_or_create(cart=cart, item=item_instance)[0]
# 			if delete_item:
# 				cart_item.delete()
# 			else:
# 				cart_item.quantity = qty
# 				cart_item.save()
# 		return HttpResponseRedirect("/")
