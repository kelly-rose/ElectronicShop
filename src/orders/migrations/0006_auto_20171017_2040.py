# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0005_auto_20171017_2023'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraddress',
            name='nick',
            field=models.CharField(max_length=120, unique=True, null=True),
        ),
        migrations.AlterField(
            model_name='useraddress',
            name='street',
            field=models.CharField(max_length=120),
        ),
    ]
