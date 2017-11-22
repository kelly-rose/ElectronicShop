from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin
from django.views.generic.base import TemplateView
from carts.views import (
        CartAPIView,
        CartView,
        CheckoutAPIView,
CheckoutFinalizeAPIView
        )
urlpatterns = [
    # Examples:
    # url(r'^$', 'newsletter.views.home', name='home'),
    # url(r'^contact/$', 'newsletter.views.contact', name='contact'),
    # url(r'^about/$', 'ecommerce2.views.about', name='about'),
    # url(r'^blog/', include('blog.urls')),
    # url(r'^cart/$', CartView.as_view(), name='cart'),

    url(r'^admin/', include(admin.site.urls)),

    # url(r'^accounts/', include('registration.backends.default.urls')),
    # url(r'^products/', include('products.urls')),
    # url(r'^categories/', include('products.urls_categories')),



    url(r'^auth/', include('signs.urls')),
    url(r'^address/shipping/$', 'orders.views.addShipping', name='add_ship_addr'),
    url(r'^address/billing/$', 'orders.views.addBilling', name='add_bill_addr'),
    url(r'^address/billing/checked/$', 'orders.views.update_billing_checked_data', name='update_billing_checked_data'),
    url(r'^address/shipping/checked/$', 'orders.views.update_shipping_checked_data', name='update_shipping_checked_data'),

    url(r'^userdata/$', 'orders.views.get_user_data', name='get_user_data'),

]

#API Patterns

from products.views import (
    CategoryAPIListView,
    CategoryRetrieveAPIView,
ProductListAPIView,
ProductRetrieveAPIView
    )
from orders.views import (
    UserShippingAddressListAPIView,
    UserBillingAddressListAPIView,
    )
urlpatterns += [
    url(r'^api/categories/$', CategoryAPIListView.as_view(), name='categories_api'),
    url(r'^api/categories/(?P<slug>[\w-]+)/$', CategoryRetrieveAPIView.as_view(), name='category_detail_api'),
    url(r'^api/products/$', ProductListAPIView.as_view(), name='products_api'),
    url(r'^api/products/(?P<pk>\d+)/$', ProductRetrieveAPIView.as_view(), name='products_detail_api'),

    #In cart token == In checkout cart_token
    # http://localhost:8000/api/checkout/?token=eydjYXJ0X2lkJzogJzE5J30=
    url(r'^api/cart/$', CartAPIView.as_view(), name='cart_api'),

    #http://localhost:8000/api/checkout/?cart_token=eydjYXJ0X2lkJzogJzE5J30=
    url(r'^api/checkout/$', CheckoutAPIView.as_view(), name='checkout_api'),
    url(r'^api/checkout/finalize/$', CheckoutFinalizeAPIView.as_view(), name='checkout_finalize_api'),

    url(r'^api/address/shipping/$', UserShippingAddressListAPIView.as_view(), name='addr_shipping_api'),
    url(r'^api/address/billing/$', UserBillingAddressListAPIView.as_view(), name='addr_billing_api'),

    url(r'^.*', TemplateView.as_view(template_name="ang_home.html"), name='home')

]
if settings.DEBUG:
	urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
	urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)