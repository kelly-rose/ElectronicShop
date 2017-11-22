# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0003_remove_useraddress_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraddress',
            name='user',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='useraddress',
            name='type',
            field=models.CharField(max_length=120),
        ),
    ]
