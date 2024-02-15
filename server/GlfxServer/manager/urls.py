from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import *
from rest_framework import routers

router = routers.DefaultRouter()
router.register("register", RegisterView, basename="register_view")


urlpatterns = [
    path("token", CustomTokenObtain.as_view(), name="token_obtain_pair"),
    path("token/refresh", TokenRefreshView.as_view(), name="refresh_view"),
    # Register / User managemenet functions
    path("", include(router.urls))
]
