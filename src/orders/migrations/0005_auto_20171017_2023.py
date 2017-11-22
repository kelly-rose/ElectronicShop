# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0004_auto_20171017_2000'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraddress',
            name='street',
            field=models.CharField(unique=True, max_length=120),
        ),
    ]
