from django.shortcuts import render
from rest_framework_simplejwt.views import (
    TokenObtainPairView)
from .serializer import MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from .models import *


# Create your views here.


class CustomTokenObtain(TokenObtainPairView):

    serializer_class = MyTokenObtainPairSerializer


class RegisterView(ModelViewSet):
    permission_classes = [permissions.AllowAny]
    http_method_names = ["post"]
    serializer_class = RegisterSerializer

    def get_queryset(self):
        return CustomUser.objects.all()
