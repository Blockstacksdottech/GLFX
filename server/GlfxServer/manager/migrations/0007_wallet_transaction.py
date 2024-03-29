# Generated by Django 4.2.10 on 2024-02-21 23:29

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('manager', '0006_alter_financialinfo_assessment1_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Wallet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('wallet_id', models.CharField(default='', max_length=255)),
                ('amount', models.FloatField(default=0)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.FloatField(default=0)),
                ('action', models.CharField(default='', max_length=255)),
                ('status', models.CharField(default='Pending', max_length=255)),
                ('t_type', models.CharField(default='', max_length=255)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('wallet', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='manager.wallet')),
            ],
        ),
    ]
