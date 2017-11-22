from django.http import HttpResponse
from django.contrib.auth import authenticate
from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string
from .tokens import account_activation_token
from django.contrib.auth.models import User
from django.core.mail import EmailMessage

from validators import validate_password, validate_email
from django.core.exceptions import ValidationError
import json
from django.http import JsonResponse
from django.middleware.csrf import get_token
from utils import get_token_data, create_login_token
from carts.models import Cart
from carts.mixins import CartTokenMixin
from rest_framework.views import APIView



def send_csrf(request):
    # just by doing this it will send csrf token back as Set-Cookie header
    csrf_token = get_token(request)
    return JsonResponse({
        'status': 'success',
        'data': csrf_token
    })

def signup(request):
    if request.method != 'POST':
        pass
    print(request.body)
    post_data = json.loads(request.body)
    username = post_data['username']
    email = post_data['email']
    password = post_data['password']

    try:
        validate_password(password)
        validate_email(email)
    except ValidationError as e:
        return JsonResponse({
            'status': 'fail',
            'data': {
                'message': str(e)
            }
        }, status=500)

    # register user
    try:
        user = User.objects.create_user( username=username, password=password, email=email)
        user.is_active = False
        user.save()
        current_site = get_current_site(request)
        message = render_to_string('acc_active_email.html', {
                'user': user,
                'domain': current_site.domain,
                'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                'token': account_activation_token.make_token(user),
        })
        mail_subject = 'Activate your blog account.'
        to_email = post_data['email']
        email = EmailMessage(mail_subject, message, to=[to_email])
        email.send()
        return HttpResponse('Please confirm your email address to complete the registration')

    except:
        return JsonResponse({
            'status': 'fail',
            'data': {
                'message': 'There was an error during registration'
            }
        }, status=500)


def activate(request, uidb64, token):
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None
    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()
        # login(request,user)
        # login(request, True, {'username': user.username, 'email': user.email})
        return HttpResponse('Thank you for your email confirmation. Now you can login your account.')
    else:
        return HttpResponse('Activation link is invalid!')



class LoginView(CartTokenMixin,APIView):
    def post(self, request, format=None):
        post_data = json.loads(request.body)
        username = post_data['username']
        password = post_data['password']

        u = authenticate(username=username, password=password)
        # if authenticated, create and return token

        if not u.is_active:
            return JsonResponse({'status': 'user is_active is False'})

        if u.is_active is not None:
            print(u.is_active)
            token = create_login_token({'username': u.username, 'email': u.email})

            # cart_token

            try:
                cart = Cart.objects.get(user=username, active=True)
            except Cart.DoesNotExist:
                return JsonResponse({
                    'status': 'success - cart does not exist',
                    'token': str(token['token']).encode('utf-8')
                    })

            data = {
                "cart_id": str(cart.id)
            }
            cart_token = self.create_token(data)

        else:
            return JsonResponse({
                'status': 'fail'
            }, status=401)

        print('token is', token['token'])

        res = JsonResponse({
            'status': 'success',
            'cart_token':cart_token,
            'token': str(token['token']).encode('utf-8')

        # 'data':  str(token['token'], 'utf-8')         --python 3
            })
        res.set_cookie('token', value=token['token'], expires=token['exp'])

        return res




# def login(request, redirect_after_registration=False, registration_data=None):
#     if redirect_after_registration:
#         token = create_login_token(registration_data)
#     else:
#         # check credentials
#         post_data = json.loads(request.body)
#         username = post_data['username']
#         password = post_data['password']
#
#         u = authenticate(username=username, password=password)
#         # if authenticated, create and return token
#
#         if not u.is_active:
#             return JsonResponse({'status': 'user is_active is False'})
#
#         if u.is_active is not None:
#             print(u.is_active)
#             token = create_login_token({'username': u.username, 'email': u.email})
#
#         else:
#             return JsonResponse({
#                 'status': 'fail'
#             }, status=401)
#
#     print('token is', token['token'])
#
#     res = JsonResponse({
#         'status': 'success',
#         'data': str(token['token']).encode('utf-8')
#
#         # 'data':  str(token['token'], 'utf-8')         --python 3
#     })
#     res.set_cookie('token', value=token['token'], expires=token['exp'])
#
#     return res

# user_data.py
# @decorator_from_middleware(JwtAuthentication)
# def get_user_data(request):
#     token = get_token_data(request)
#     username = token['username']
#
#     try:
#         u = User.objects.get(username=username).values('username', 'email')
#     except User.DoesNotExist:
#         return JsonResponse({
#             'status': 'fail',
#             'data': {
#                 'message': 'The username does not exist'
#             }
#         }, status=500)
#
#     return JsonResponse({
#         'status': 'success',
#         'data': u
#     })