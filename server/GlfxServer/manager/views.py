from django.shortcuts import render
from rest_framework_simplejwt.views import (
    TokenObtainPairView)
from .serializer import MyTokenObtainPairSerializer, RegisterSerializer, PersonalInfoSerializer, FinancialInfoSerializer, WalletSerializer, TransactionSerializer, DocumentsSerializer, AccountSerializer, TicketSerializer, MessagesSerializer, TicketWithMessagesSerializer, VerificationSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework import permissions, status
from rest_framework.response import Response
from .models import *
import uuid


# Create your views here.


class CustomTokenObtain(TokenObtainPairView):

    serializer_class = MyTokenObtainPairSerializer


class RegisterView(ModelViewSet):
    permission_classes = [permissions.AllowAny]
    http_method_names = ["post", "patch"]
    serializer_class = RegisterSerializer

    def get_queryset(self):
        return CustomUser.objects.all()


class TestSession(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, format=None):
        user = request.user
        if (user.is_superuser):
            url_path = "/admpnl/clients"
            super_user = True
        else:
            url_path = "/client/myprofile/personaldetails"
            super_user = False

        print(f'User is {user}')
        u = RegisterSerializer(user).data
        u['path'] = url_path
        u['s'] = super_user
        return Response(u)


class UserInfoV(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, format=None):
        user = request.user
        user_s = RegisterSerializer(user, data=request.data, partial=True)
        if (user_s.is_valid()):
            user_s.save()
            return Response({"failed": False})
        else:
            print(user_s.errors)
            return Response({"failed": True}, status=status.HTTP_400_BAD_REQUEST)


class SecurityUpdateV(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, format=None):
        user = request.user
        data = request.data
        old_pass = data.get("old_pass", False)
        new_pass = data.get("new_pass", False)
        confirm_pass = data.get("confirm_pass", False)
        if all([old_pass, new_pass, confirm_pass]):
            print([old_pass, new_pass, confirm_pass])
            if user.check_password(old_pass):
                if confirm_pass == new_pass:
                    user.set_password(new_pass)
                    return Response({"failed": False})
                else:
                    return Response({"failed": True, "message": "Password missmatch"}, status=status.HTTP_200_OK)
            else:
                return Response({"failed": True, "message": "Password is incorrect"}, status=status.HTTP_200_OK)

        else:
            return Response({"failed": True}, status=status.HTTP_200_OK)


class PersonalInfoV(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, format=None):
        user = request.user
        info = PersonalInfo.objects.filter(user=user).first()
        if not info:
            info = PersonalInfo.objects.create(user=user)
            info.save()
        info_s = PersonalInfoSerializer(info)
        return Response(info_s.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        user = request.user
        info = PersonalInfo.objects.filter(user=user).first()
        if not info:
            info = PersonalInfo.objects.create(user=user)
            info.save()
        info_s = PersonalInfoSerializer(info, data=request.data, partial=True)
        if info_s.is_valid():
            info_s.save()
            return Response({"failed": False})
        else:
            print(info_s.errors)
            return Response({"failed": True}, status=status.HTTP_400_BAD_REQUEST)


class FinancialInfoV(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, format=None):
        user = request.user
        info = FinancialInfo.objects.filter(user=user).first()
        if not info:
            info = FinancialInfo.objects.create(user=user)
            info.save()
        info_s = FinancialInfoSerializer(info)
        return Response(info_s.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        user = request.user
        info = FinancialInfo.objects.filter(user=user).first()
        if not info:
            info = FinancialInfo.objects.create(user=user)
            info.save()
        info_s = FinancialInfoSerializer(info, data=request.data, partial=True)
        if info_s.is_valid():
            info_s.save()
            return Response({"failed": False})
        else:
            print(info_s.errors)
            return Response({"failed": True}, status=status.HTTP_400_BAD_REQUEST)


class WalletV(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, format=None):
        user = request.user
        wallet = Wallet.objects.filter(user=user).first()
        if not wallet:
            wallet = Wallet.objects.create(
                user=user, wallet_id=str(uuid.uuid4()))
            wallet.save()
        wallet_s = WalletSerializer(wallet)
        return Response(wallet_s.data, status=status.HTTP_200_OK)


class TransactionCreateAPIView(APIView):
    def post(self, request, *args, **kwargs):
        source = request.data.get('source')
        source_id = request.data.get('source_id')
        action = request.data.get('action')
        amount = request.data.get('amount')
        print(request.data)
        image_file = request.data.get('image')
        comment = request.data.get("description", "")

        # Validate source and action
        if source not in ['wallet', 'account'] or action not in ['deposit', 'withdrawal']:
            return Response({"error": "Invalid source or action"}, status=status.HTTP_400_BAD_REQUEST)

        # Create transaction
        transaction_data = {'user': request.user.id,
                            'amount': amount, 't_type': action, "comment": comment}
        if source == 'wallet':
            transaction_data["source"] = source
            transaction_data["source_id"] = source_id
            if action == 'deposit':
                transaction_data["action"] = "Deposit to wallet"
                serializer = TransactionSerializer(data=transaction_data)
                print('before')
                if serializer.is_valid():
                    print('transaction valid')
                    transaction = serializer.save()
                    # Create document
                    if image_file:
                        document_data = {
                            'transaction': transaction.id, 'image': image_file}
                        document_serializer = DocumentsSerializer(
                            data=document_data)
                        print("document serializer check here")
                        print(document_serializer.is_valid())
                        if document_serializer.is_valid():
                            document_serializer.save()
                        else:
                            transaction.delete()
                            return Response(document_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                else:
                    print(serializer.errors)
            else:  # action is withdrawal
                print("withdrawal here")
                transaction_data["action"] = "Withdrawal from wallet"
                serializer = TransactionSerializer(data=transaction_data)
                if serializer.is_valid():
                    serializer.save()
                else:
                    print(serializer.errors)
        else:  # source is account
            transaction_data["source"] = source
            transaction_data["source_id"] = source_id
            if action == 'deposit':
                serializer = TransactionSerializer(data=transaction_data)
                if serializer.is_valid():
                    serializer.save()
            else:  # action is withdrawal
                return Response({"error": "Withdrawal from account not supported"}, status=status.HTTP_400_BAD_REQUEST)

        return Response(serializer.data, status=status.HTTP_201_CREATED)


class VerificationView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, format=None):
        u = request.user
        doc = VerificationDocuments.objects.first()
        if doc:
            doc_s = VerificationSerializer(doc)
            return Response(doc_s.data, status=status.HTTP_200_OK)
        else:
            return Response({"status": False})

    def post(self, request, format=None):
        u = request.user
        country = request.data.get("country", False)
        docType = request.data.get("docType", False)
        front = request.data.get("front", False)
        back = request.data.get("back", False)

        if all([country, docType, front, back]):
            body = {"user": u.id, "country": country, "docType": docType,
                    "front": front, "back": back}
            if not u.is_verified:
                doc = VerificationDocuments.objects.filter(user=u).first()
                if doc:
                    doc.delete()
                print(body)
                doc_s = VerificationSerializer(data=body)
                if doc_s.is_valid():
                    d = doc_s.save()
                    return Response(doc_s.data, status=status.HTTP_201_CREATED)
                else:
                    print(doc_s.errors)
                    return Response({"verified": False}, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({"verified": True})
        else:
            return Response({"verified": False}, status=status.HTTP_400_BAD_REQUEST)


class TransactionV(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, format=None):
        user = request.user
        trs = Transaction.objects.filter(user=user).order_by("-date")
        trs_s = TransactionSerializer(trs, many=True).data
        return Response(trs_s, status=status.HTTP_200_OK)


class AccountViewSet(ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    http_method_names = ["post", "get", "delete"]
    serializer_class = AccountSerializer

    def get_queryset(self):
        user = self.request.user
        return Account.objects.filter(user=user)


class SupportViewSet(ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    http_method_names = ["get", "delete"]
    serializer_class = TicketWithMessagesSerializer

    def get_queryset(self):
        user = self.request.user
        return Ticket.objects.filter(user=user)


class NewMessage(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        user = request.user
        data = request.data
        subject = data.get("subject", False)
        message = data.get("message", False)
        if (all([subject, message])):
            t = TicketSerializer(data={"user": user.id, "subject": subject})
            if (t.is_valid()):
                ts = t.save()
                temp = MessagesSerializer(
                    data={"ticket": ts.id, "message": message})
                if (temp.is_valid()):
                    temp.save()
                    return Response({"failed": False}, status=status.HTTP_201_CREATED)

        return Response({"failed": True}, status=status.HTTP_400_BAD_REQUEST)


class SendReply(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        user = request.user
        data = request.data
        ticket_id = data.get("ticket", False)
        message = data.get("message", False)
        ticket = Ticket.objects.filter(id=int(ticket_id)).first()
        if ticket and (ticket.user.id == user.id or user.is_superuser):
            m = MessagesSerializer(
                data={"ticket": ticket.id, "message": message, "from_admin": user.is_superuser})
            if m.is_valid():
                m.save()
                return Response({"failed": False}, status=status.HTTP_200_OK)
        return Response({"failed": True}, status=status.HTTP_400_BAD_REQUEST)
