# Generated by Django 4.0.4 on 2022-05-12 17:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='disponible',
            field=models.BooleanField(default=True),
        ),
    ]