from django.shortcuts import render
from .serializer import *
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework import permissions, status
from rest_framework.response import Response
from manager.models import *
from manager.serializer import *

# Create your views here.


class AdminUserView(ModelViewSet):
    permission_classes = [permissions.IsAdminUser]
    http_method_names = ["get"]
    serializer_class = UserAdminSerializer

    def get_queryset(self):
        return CustomUser.objects.filter(is_superuser=False)


class AdminStatus(APIView):
    permission_classes = [permissions.IsAdminUser]

    def post(self, request, format=None):
        data = request.data
        idd = data.get("id", False)
        status_val = data.get("status", False)

        if all([idd, status_val]):
            tr = Transaction.objects.filter(id=int(idd)).first()
            if not tr.done:
                if tr.source.lower() == "wallet":
                    w = Wallet.objects.filter(id=int(tr.source_id)).first()
                else:
                    w = Account.objects.filter(id=int(tr.source_id)).first()
                print(w)
                if w:
                    if tr.t_type.lower() == "withdrawal":
                        w.amount -= tr.amount
                    else:
                        print("Depositing")
                        w.amount += tr.amount
                    w.save()
                tr.status = status_val
                tr.done = True
                tr.save()
                return Response({"failed": False})
            else:
                return Response({"failed": True}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"failed": True}, status=status.HTTP_400_BAD_REQUEST)


class AdminHandleUser(APIView):
    permission_classes = [permissions.IsAdminUser]

    def post(self, request, format=None):
        data = request.data
        idd = data.get("id", False)
        action = data.get("action", False)

        if all([idd, action]):

            u = CustomUser.objects.filter(id=int(idd)).first()
            if u:
                if action == "ban":
                    u.is_baned = True
                elif action == "unban":
                    u.is_baned = False
                elif action == "approve":
                    u.is_verified = True
                elif action == "unapprove":
                    u.is_verified = False
                    d = VerificationDocuments.objects.filter(user=u).first()
                    d.delete()
                u.save()
                return Response({"failed": False})
            else:
                return Response({"failed": True}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"failed": True}, status=status.HTTP_400_BAD_REQUEST)


class AdminSupportViewSet(ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    http_method_names = ["get", "delete"]
    serializer_class = TicketWithMessagesSerializer

    def get_queryset(self):
        user = self.request.user
        return Ticket.objects.all()
