from django.http import HttpResponse
from django.contrib.auth import authenticate
from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string
from django.contrib.auth.models import User
from django.core.mail import EmailMessage

from orders.models import UserShippingAddress,UserBillingAddress

from django.core.exceptions import ValidationError
import json
from django.http import JsonResponse
from django.middleware.csrf import get_token
from ecommerce2.utils import get_token_data, create_login_token

from django.utils.decorators import decorator_from_middleware

from ecommerce2.jwt_authentication import JwtAuthentication
from rest_framework.generics import ListAPIView
from .serializers import UserShippingAddressSerializer,UserBillingAddressSerializer
from .filters import ShippingAddrFilter,BillingAddrFilter
from rest_framework import filters






@decorator_from_middleware(JwtAuthentication)
def update_billing_checked_data(request):
    # only the email can be updated here
    token = get_token_data(request)
    username = token['username']

    post_data = json.loads(request.body)

    nick = post_data['nick']
    checked = post_data['checked']

    # get user object
    addr = UserBillingAddress.objects.get(user=username,nick=nick)
    addr.checked = checked
    try:
        addr.save()
    except:
        return JsonResponse({
            'status': 'fail',
            'data': {
                'message': 'There was an error while updating user shipping addr checked data'
            }
        }, status=500)

    res = JsonResponse({
        'status': 'success'
    })
    return res

@decorator_from_middleware(JwtAuthentication)
def update_shipping_checked_data(request):
    # only the email can be updated here
    token = get_token_data(request)
    username = token['username']

    post_data = json.loads(request.body)
    nick = post_data['nick']
    checked = post_data['checked']

    # get user object
    addr = UserShippingAddress.objects.get(user=username,nick=nick)
    addr.checked = checked
    try:
        addr.save()
    except:
        return JsonResponse({
            'status': 'fail',
            'data': {
                'message': 'There was an error while updating user shipping addr checked data'
            }
        }, status=500)

    res = JsonResponse({
        'status': 'success'
    })
    return res

class UserShippingAddressListAPIView(ListAPIView):
    model = UserShippingAddress
    serializer_class = UserShippingAddressSerializer
    queryset = UserShippingAddress.objects.all()
    filter_backends = [
        filters.SearchFilter,
        # filters.OrderingFilter,
        filters.DjangoFilterBackend
    ]
    search_fields = ["user"]
    # ordering_fields = ["title", "id"]
    filter_class = ShippingAddrFilter

class UserBillingAddressListAPIView(ListAPIView):
    model = UserShippingAddress
    serializer_class = UserBillingAddressSerializer
    queryset = UserBillingAddress.objects.all()
    filter_backends = [
        filters.SearchFilter,
        # filters.OrderingFilter,
        filters.DjangoFilterBackend
    ]
    search_fields = ["user"]
    # ordering_fields = ["title", "id"]
    filter_class = BillingAddrFilter

def send_csrf(request):
    # just by doing this it will send csrf token back as Set-Cookie header
    csrf_token = get_token(request)
    return JsonResponse({
        'status': 'success',
        'data': csrf_token
    })


@decorator_from_middleware(JwtAuthentication)
def addShipping(request):
    if request.method != 'POST':
        pass
    print(request.body)

    token = get_token_data(request)
    username = token['username']
    u = User.objects.get(username=username)

    print u

    post_data = json.loads(request.body)
    nick=post_data['nick']
    street = post_data['street']
    zipcode = post_data['zipcode']
    city = post_data['city']
    state = post_data['state']

    shipping_addr = UserShippingAddress(nick=nick,user=u, street=street, zipcode=zipcode, city=city,state=state)
    try:
        if(UserShippingAddress.objects.count()==0):
            shipping_addr.checked=True
            shipping_addr.save()
        else:
            shipping_addr.save()
    except Exception as e:
        return JsonResponse({
            'status': 'fail',
            'data': {
                'message': "This addr is already exist."
                # 'message': str(e) if type(e) == ValueError else 'Error while saving movie'
            }
        }, status=500)

    return JsonResponse({
        'status': 'success'
    })

@decorator_from_middleware(JwtAuthentication)
def addBilling(request):
    if request.method != 'POST':
        pass
    print(request.body)

    token = get_token_data(request)
    username = token['username']
    u = User.objects.get(username=username)

    print u

    post_data = json.loads(request.body)
    nick=post_data['nick']
    street = post_data['street']
    zipcode = post_data['zipcode']
    city = post_data['city']
    state = post_data['state']
    billing_addr = UserBillingAddress(nick=nick,user=u, street=street, zipcode=zipcode, city=city,state=state)
    try:
        billing_addr.save()
    except Exception as e:
        return JsonResponse({
            'status': 'fail',
            'data': {
                'message': "This addr is already exist."
                # 'message': str(e) if type(e) == ValueError else 'Error while saving movie'
            }
        }, status=500)

    return JsonResponse({
        'status': 'success'
    })





# user_data.py

@decorator_from_middleware(JwtAuthentication)
def get_user_data(request):
    token = get_token_data(request)
    username = token['username']

    try:
        u = User.objects.get(username=username).values('username', 'email')
    except User.DoesNotExist:
        return JsonResponse({
            'status': 'fail',
            'data': {
                'message': 'The username does not exist'
            }
        }, status=500)

    return JsonResponse({
        'status': 'success',
        'data': u
    })