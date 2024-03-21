from .models import (
    CustomUser,
    PersonalInfo,
    FinancialInfo,
    Wallet,
    Transaction,
    Documents,
    Account,
    Ticket,
    Messages,
    VerificationDocuments
)
from rest_framework.serializers import ModelSerializer, SerializerMethodField
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from rest_framework import exceptions, serializers
from rest_framework.exceptions import ValidationError
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.settings import api_settings
from .emailHandler import send_email
from .templates import *


class PasswordField(serializers.CharField):
    def __init__(self, *args, **kwargs):
        kwargs.setdefault("style", {})

        kwargs["style"]["input_type"] = "password"
        kwargs["write_only"] = True

        super().__init__(*args, **kwargs)


class CustomJWTSerializer(TokenObtainPairSerializer):
    username_field = "email"

    def validate(self, attrs):
        print('Im here ')
        print(attrs)
        credentials = {
            'email': '',
            'password': attrs.get("password")
        }

        # This is answering the original question, but do whatever you need here.
        # For example in my case I had to check a different model that stores more user info
        # But in the end, you should obtain the username to continue.
        user_obj = CustomUser.objects.filter(email=attrs.get("email")).first()
        if user_obj:
            credentials['username'] = user_obj.username

        return super().validate(credentials)


class MyTokenObtainSerializer(serializers.Serializer):
    username_field = "email"

    def __init__(self, *args, **kwargs):
        super(MyTokenObtainSerializer, self).__init__(*args, **kwargs)

        self.fields[self.username_field] = serializers.CharField()
        self.fields['password'] = PasswordField()

    def validate(self, attrs):
        # self.user = authenticate(**{
        #     self.username_field: attrs[self.username_field],
        #     'password': attrs['password'],
        # })
        self.user = CustomUser.objects.filter(email=attrs[self.username_field]).first(
        ) or CustomUser.objects.filter(username=attrs[self.username_field]).first()
        print(self.user)

        if not self.user:
            raise ValidationError('The user is not valid.')

        if self.user:
            if not self.user.check_password(attrs['password']):
                raise ValidationError('Incorrect credentials.')
        print(self.user)
        # Prior to Django 1.10, inactive users could be authenticated with the
        # default `ModelBackend`.  As of Django 1.10, the `ModelBackend`
        # prevents inactive users from authenticating.  App designers can still
        # allow inactive users to authenticate by opting for the new
        # `AllowAllUsersModelBackend`.  However, we explicitly prevent inactive
        # users from authenticating to enforce a reasonable policy and provide
        # sensible backwards compatibility with older Django versions.
        if self.user is None or not self.user.is_active:
            raise ValidationError(
                'No active account found with the given credentials')

        return {}

    @classmethod
    def get_token(cls, user):
        raise NotImplemented(
            'Must implement `get_token` method for `MyTokenObtainSerializer` subclasses')


class MyTokenObtainPairSerializer(MyTokenObtainSerializer):
    @classmethod
    def get_token(cls, user):
        return RefreshToken.for_user(user)

    def validate(self, attrs):
        data = super(MyTokenObtainPairSerializer, self).validate(attrs)

        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)

        if api_settings.UPDATE_LAST_LOGIN:
            update_last_login(None, self.user)

        return data


class RegisterSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'password', 'username',
                  'name', 'surname', 'company_name', 'phone', 'joined', 'is_baned', 'is_verified', 'email_verified']
        extra_kwargs = {'password': {'write_only': True, 'required': False}}

    def create(self, validated, *args, **kwargs):
        u = CustomUser.objects.create(**validated)
        u.set_password(validated['password'])
        u.save()
        # sending email
        # res = s
        return RegisterSerializer(u).data


class VerificationSerializer(ModelSerializer):
    class Meta:
        model = VerificationDocuments
        fields = "__all__"


class PersonalInfoSerializer(ModelSerializer):
    class Meta:
        model = PersonalInfo
        fields = "__all__"


class FinancialInfoSerializer(ModelSerializer):
    class Meta:
        model = FinancialInfo
        fields = "__all__"


class WalletSerializer(ModelSerializer):
    class Meta:
        model = Wallet
        fields = "__all__"


class TransactionSerializer(ModelSerializer):
    class Meta:
        model = Transaction
        fields = "__all__"


class DocumentsSerializer(ModelSerializer):
    class Meta:
        model = Documents
        fields = "__all__"


class AccountSerializer(ModelSerializer):
    class Meta:
        model = Account
        fields = "__all__"

    def create(self, validated, *args, **kwargs):
        print(validated)
        acc = Account.objects.create(**validated)
        acc.save()
        # sending email
        res = send_email(DEMO_SUBJECT, DEMO_BODY.format(
            acc.user.username,
            acc.acc_leverage,
            acc.balance,
            acc.master_pass,
            acc.investor_pass
        ), [acc.user.email])
        return validated


class TicketSerializer(ModelSerializer):
    class Meta:
        model = Ticket
        fields = "__all__"


class MessagesSerializer(ModelSerializer):
    class Meta:
        model = Messages
        fields = "__all__"


class TicketWithMessagesSerializer(ModelSerializer):

    user = serializers.SerializerMethodField()
    messages = serializers.SerializerMethodField()

    class Meta:
        model = Ticket
        fields = "__all__"

    def get_messages(self, instance):
        messages = Messages.objects.filter(ticket=instance).order_by("date")
        return MessagesSerializer(messages, many=True).data

    def get_user(self, instance):
        return RegisterSerializer(instance.user).data
