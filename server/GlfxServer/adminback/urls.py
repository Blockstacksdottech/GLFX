from django.contrib import admin
from django.urls import path, include

from .views import *
from rest_framework import routers

router = routers.DefaultRouter()
router.register("admusers", AdminUserView, basename="admin_user_view")
router.register("admtickets", AdminSupportViewSet, basename="admin_tickets")
# router.register("admstatus", AdminStatus, basename="admin_status_view")


urlpatterns = [
    path("admstatus", AdminStatus.as_view(), name="admin_status_view"),
    path("banuser", AdminHandleUser.as_view(), name="admin_handle_user"),
    path("admtickclose", MarkTicketSolved.as_view(), name="admin_handle_ticket"),
    # viewSet router
    path("", include(router.urls))
]
