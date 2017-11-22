from django.contrib import admin

# Register your models here.


from .models import UserCheckout, UserShippingAddress,UserBillingAddress, Order


admin.site.register(UserCheckout)


# admin.site.register(UserAddress)
admin.site.register(UserShippingAddress)
admin.site.register(UserBillingAddress)

admin.site.register(Order)