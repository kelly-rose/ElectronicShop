# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0008_userbillingaddress_checked'),
    ]

    operations = [
        migrations.AddField(
            model_name='usershippingaddress',
            name='checked',
            field=models.BooleanField(default=False),
        ),
    ]
