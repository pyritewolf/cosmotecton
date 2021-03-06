# Generated by Django 2.2 on 2020-04-10 18:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('worlds', '0002_remove_theme_owner'),
    ]

    operations = [
        migrations.CreateModel(
            name='Story',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('public', models.BooleanField(default=False)),
                ('description', models.TextField()),
                ('world', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='worlds.World')),
            ],
        ),
        migrations.DeleteModel(
            name='Theme',
        ),
    ]
