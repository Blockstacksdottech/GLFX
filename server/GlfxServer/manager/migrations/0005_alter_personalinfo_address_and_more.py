# Generated by Django 4.2.10 on 2024-02-20 00:42

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('manager', '0004_alter_personalinfo_birthday'),
    ]

    operations = [
        migrations.AlterField(
            model_name='personalinfo',
            name='address',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='personalinfo',
            name='address2',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='personalinfo',
            name='city',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='personalinfo',
            name='country',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='personalinfo',
            name='state',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
        migrations.CreateModel(
            name='FinancialInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('net_worth', models.CharField(blank=True, default='', max_length=255)),
                ('annual_income', models.CharField(blank=True, default='', max_length=255)),
                ('employment_status', models.CharField(blank=True, default='', max_length=255)),
                ('sources', models.CharField(blank=True, default='', max_length=255)),
                ('instruments', models.CharField(blank=True, default='', max_length=255)),
                ('assessment1', models.CharField(blank=True, default='', max_length=255)),
                ('assessment2', models.CharField(blank=True, default='', max_length=255)),
                ('initial_investment', models.CharField(blank=True, default='', max_length=255)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]