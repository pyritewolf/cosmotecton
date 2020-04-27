# Generated by Django 2.2 on 2020-04-10 20:42

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('worlds', '0003_auto_20200410_1839'),
    ]

    operations = [
        migrations.AddField(
            model_name='story',
            name='owner',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='stories', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
