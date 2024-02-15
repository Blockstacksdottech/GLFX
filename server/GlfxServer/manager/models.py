from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class CustomUser(AbstractUser):
    name = models.CharField(default="", max_length=255)
    surname = models.CharField(default="", max_length=255)
    company_name = models.CharField(default="", max_length=255)
    phone = models.CharField(default="", max_length=255)
    is_verified = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    joined = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username
