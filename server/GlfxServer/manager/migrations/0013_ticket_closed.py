# Generated by Django 4.2.10 on 2024-02-23 04:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('manager', '0012_ticket_messages'),
    ]

    operations = [
        migrations.AddField(
            model_name='ticket',
            name='closed',
            field=models.BooleanField(default=False),
        ),
    ]
