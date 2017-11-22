from django.conf.urls import url
from . import views
from .views import LoginView


auth_routes = [
    url(r'^csrf$', views.send_csrf, name='send csrf token'),
    # url(r'^login/$', views.login, name='login'),
    url(r'^login/$', LoginView.as_view(), name='login'),

    url(r'^register/$', views.signup, name='signup'),
    url(r'^activate/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        views.activate, name='activate'),
    # url(r'^auth/register/$', include('registration.backends.default.urls')),

    # url(r'^auth/username-exists/$', views.username_exists, name='check unique username'),
]

# user_data_routes = [
#     url(r'^user/get-data/$', views.get_user_data, name='get user data'),
#     url(r'^user/update/$', views.update_data, name='update user data'),
#     url(r'^user/update-password/$', views.update_password, name='update user password'),
#     url(r'^user/delete/$', views.delete_account, name='delete user account')
# ]

urlpatterns = auth_routes
              # + user_data_routes
