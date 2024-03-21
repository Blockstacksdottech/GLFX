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
from .emailHandler import send_email
from .templates import *
from .constants import *


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
        print(request.data)
        user_s = RegisterSerializer(user, data=request.data, partial=True)
        if (user_s.is_valid()):
            user_s.save()
            return Response({"failed": False})
        else:
            print(user_s.errors)
            return Response({"failed": True}, status=status.HTTP_400_BAD_REQUEST)


class RecoverPassword(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, format=None):
        data = request.data
        email = data.get("email", False)
        if email:
            u = CustomUser.objects.filter(email=email).first()
            if u:
                old_r = RecoverRequest.objects.filter(user=u).first()
                if old_r:
                    old_r.delete()
                r_id = str(uuid.uuid4())
                r = RecoverRequest.objects.create(user=u, req_id=r_id)
                r.save()
                res = send_email(RESET_SUBJECT, RESET_BODY.format(u.username,
                                                                  URL + "forgotpassword?reqid="+r_id), [u.email])
                if res:
                    return Response({"failed": False}, status=status.HTTP_200_OK)
                else:
                    return Response({"failed": True}, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({"failed": True}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"failed": True}, status=status.HTTP_400_BAD_REQUEST)


class RecoverUpdate(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, format=None):
        data = request.data
        req_id = data.get("req_id", False)
        new_pass = data.get("new_pass", False)
        confirm_pass = data.get("confirm_pass", False)
        if all([req_id, new_pass, confirm_pass]):
            r = RecoverRequest.objects.filter(req_id=req_id).first()
            if r:
                user = r.user
                if confirm_pass == new_pass:
                    user.set_password(new_pass)
                    user.save()
                    print("updated user {0}".format(user.username))
                    print("new password is " + new_pass)
                    return Response({"failed": False})
                else:
                    return Response({"failed": True, "message": "Password missmatch"}, status=status.HTTP_200_OK)
            else:
                return Response({"failed": True, "message": "No Request matching"}, status=status.HTTP_200_OK)

        else:
            return Response({"failed": True}, status=status.HTTP_200_OK)


class SendOTP(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, format=None):
        user = request.user
        old_c = ConfirmationCode.objects.filter(user=user).first()
        if old_c:
            old_c.delete()
        code_ = str(uuid.uuid4()).split("-")[0]
        c = ConfirmationCode.objects.create(user=user, code=code_)
        c.save()
        res = send_email(CONFIRMATION_SUBJECT.format(
            user.username), CONFIRMATION_BODY.format(user.username, code_), [user.email])
        if res:
            return Response({"failed": False})
        else:
            return Response({"failed": True}, status=status.HTTP_400_BAD_REQUEST)


class ConfirmOTP(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, format=None):
        user = request.user
        data = request.data
        code = data.get("code", False)
        if code:
            c = ConfirmationCode.objects.filter(user=user, code=code).first()
            if c:
                user.email_verified = True
                user.save()
                c.delete()
                return Response({"failed": False})
            else:
                return Response({"failed": True}, status=status.HTTP_400_BAD_REQUEST)
        else:
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
                    user.save()
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
                user=user, wallet_id=user.username+"-" + str(uuid.uuid4()).split("-")[0])
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
        doc = VerificationDocuments.objects.filter(user=u).first()
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
        doc = VerificationDocuments.objects.filter(user=u).first()
        if all([country, docType, front, back]) or (all([country, docType]) and doc):
            body = {"user": u.id, "country": country, "docType": docType,
                    "front": front, "back": back}
            if not u.is_verified:

                if all([country, docType, front, back]):
                    if doc:
                        doc.delete()

                    doc_s = VerificationSerializer(data=body)
                    if doc_s.is_valid():
                        d = doc_s.save()
                        return Response(doc_s.data, status=status.HTTP_201_CREATED)
                    else:
                        print(doc_s.errors)
                        return Response({"verified": False}, status=status.HTTP_400_BAD_REQUEST)
                else:
                    doc.country = country
                    doc.docType = docType
                    doc.save()
                    return Response(VerificationSerializer(doc).data, status=status.HTTP_200_OK)
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
    http_method_names = ["get"]
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
                    d = temp.save()
                    return Response({"failed": False, "id": ts.id}, status=status.HTTP_201_CREATED)

        return Response({"failed": True}, status=status.HTTP_400_BAD_REQUEST)


class DeleteTicket(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        user = request.user
        data = request.data
        ticket_id = data.get("ticket", False)
        ticket = Ticket.objects.filter(id=int(ticket_id)).first()
        if ticket:
            if (ticket.user.id == user.id):
                ticket.hidden_user = True
            if (user.is_superuser):
                ticket.hidden_admin = True
            ticket.save()
            if ticket.hidden_admin and ticket.hidden_user:
                ticket.delete()
            return Response({"failed": False}, status=status.HTTP_200_OK)
        return Response({"failed": True}, status=status.HTTP_400_BAD_REQUEST)


class SendReply(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        user = request.user
        data = request.data
        ticket_id = data.get("ticket", False)
        message = data.get("message", False)
        ticket = Ticket.objects.filter(id=int(ticket_id)).first()
        if ticket and (ticket.user.id == user.id or user.is_superuser) and not ticket.closed:
            m = MessagesSerializer(
                data={"ticket": ticket.id, "message": message, "from_admin": user.is_superuser})
            if m.is_valid():
                m.save()
                return Response({"failed": False}, status=status.HTTP_200_OK)
        return Response({"failed": True}, status=status.HTTP_400_BAD_REQUEST)
