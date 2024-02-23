from django.contrib import admin
from .models import *

# Register your models here.


admin.site.register(CustomUser)
admin.site.register(PersonalInfo)
admin.site.register(FinancialInfo)
admin.site.register(Wallet)
admin.site.register(Transaction)
admin.site.register(Documents)
