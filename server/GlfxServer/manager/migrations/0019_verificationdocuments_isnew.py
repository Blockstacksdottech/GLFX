# Generated by Django 4.2.10 on 2024-03-04 00:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('manager', '0018_alter_messages_message'),
    ]

    operations = [
        migrations.AddField(
            model_name='verificationdocuments',
            name='isnew',
            field=models.BooleanField(default=True),
        ),
    ]
