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
    is_baned = models.BooleanField(default=False)
    joined = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username


class PersonalInfo(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    birthday = models.DateField(blank=True, null=True)
    address = models.CharField(default="", max_length=255, blank=True)
    address2 = models.CharField(default="", max_length=255, blank=True)
    city = models.CharField(default="", max_length=255, blank=True)
    state = models.CharField(default="", max_length=255, blank=True)
    country = models.CharField(default="", max_length=255, blank=True)

    def __str__(self):
        return self.user.username


class FinancialInfo(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    net_worth = models.CharField(default="", max_length=255, blank=True)
    annual_income = models.CharField(default="", max_length=255, blank=True)
    employment_status = models.CharField(
        default="", max_length=255, blank=True)
    sources = models.CharField(default="", max_length=255, blank=True)
    instruments = models.BooleanField(default=False)
    assessment1 = models.BooleanField(default=False)
    assessment2 = models.BooleanField(default=False)
    initial_investment = models.CharField(
        default="", max_length=255, blank=True)

    def __str__(self):
        return self.user.username


class Wallet(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    wallet_id = models.CharField(default="", max_length=255)
    amount = models.FloatField(default=0)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username


class Account(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    acc_type = models.CharField(default="", max_length=255)
    acc_currency = models.CharField(default="", max_length=255)
    acc_leverage = models.CharField(default="", max_length=255)
    islamic = models.BooleanField(default=False)
    master_pass = models.CharField(default="", max_length=255)
    investor_pass = models.CharField(default="", max_length=255)
    nickname = models.CharField(default="", max_length=255, blank=True)
    balance = models.FloatField(default=0)

    def __str__(self):
        return self.user.username


class Transaction(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    amount = models.FloatField(default=0)
    # Wallet to account | Account to Wallet | Deposit to Wallet | Withdrawal from Wallet
    action = models.CharField(default="", max_length=255)
    # Pending | Completed | Rejected
    status = models.CharField(default="Pending", max_length=255)
    t_type = models.CharField(
        default="", max_length=255)  # Deposit | Withdrawal
    source = models.CharField(default="", max_length=255)
    source_id = models.IntegerField(default=0)
    comment = models.CharField(default="", max_length=255, blank=True)
    done = models.BooleanField(default=False)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username


class Documents(models.Model):
    transaction = models.ForeignKey(Transaction, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="documents")
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.transaction.user.username


class Ticket(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    subject = models.CharField(default="", max_length=255)
    closed = models.BooleanField(default=False)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.subject


class Messages(models.Model):
    ticket = models.ForeignKey(Ticket, on_delete=models.CASCADE)
    message = models.CharField(default="", max_length=255)
    from_admin = models.BooleanField(default=False)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.ticket.subject
