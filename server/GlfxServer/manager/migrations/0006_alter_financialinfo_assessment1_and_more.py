# Generated by Django 4.2.10 on 2024-02-20 02:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('manager', '0005_alter_personalinfo_address_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='financialinfo',
            name='assessment1',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='financialinfo',
            name='assessment2',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='financialinfo',
            name='instruments',
            field=models.BooleanField(default=False),
        ),
    ]
