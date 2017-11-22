from django_filters import FilterSet, CharFilter, NumberFilter,BooleanFilter

from .models import UserShippingAddress
from .models import UserBillingAddress




class ShippingAddrFilter(FilterSet):
	nick = CharFilter(name='nick', lookup_type='icontains', distinct=True)
	user = CharFilter(name='user', lookup_type='icontains', distinct=True)
	street = CharFilter(name='street', lookup_type='icontains', distinct=True)
	city = CharFilter(name='city', lookup_type='icontains', distinct=True)
	state = CharFilter(name='state', lookup_type='icontains', distinct=True)
	zipcode = CharFilter(name='zipcode', lookup_type='icontains', distinct=True)
	checked = BooleanFilter(name='checked', lookup_type='icontains', distinct=True)
	class Meta:
		model = UserShippingAddress
		fields = [
			'nick',
			'user',
			'street',
			'checked',
			'state',
			'city',
			'zipcode'
		]


class BillingAddrFilter(FilterSet):
	nick = CharFilter(name='nick', lookup_type='icontains', distinct=True)
	user = CharFilter(name='user', lookup_type='icontains', distinct=True)
	street = CharFilter(name='street', lookup_type='icontains', distinct=True)
	city = CharFilter(name='city', lookup_type='icontains', distinct=True)
	state = CharFilter(name='state', lookup_type='icontains', distinct=True)
	zipcode = CharFilter(name='zipcode', lookup_type='icontains', distinct=True)
	checked=BooleanFilter(name='checked', lookup_type='icontains', distinct=True)
	class Meta:
		model = UserBillingAddress
		fields = [
			'nick',
			'user',
			'street',
			'checked',
			'state',
			'city',
			'zipcode'
		]