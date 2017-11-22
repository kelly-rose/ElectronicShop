# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0007_auto_20171017_2055'),
    ]

    operations = [
        migrations.AddField(
            model_name='userbillingaddress',
            name='checked',
            field=models.BooleanField(default=False),
        ),
    ]
