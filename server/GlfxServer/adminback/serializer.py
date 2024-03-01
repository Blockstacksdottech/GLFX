from manager.models import *
from rest_framework.serializers import ModelSerializer, SerializerMethodField
from manager.serializer import AccountSerializer, TransactionSerializer, WalletSerializer, VerificationSerializer, PersonalInfoSerializer


class UserAdminSerializer(ModelSerializer):

    accounts = SerializerMethodField()
    transactions = SerializerMethodField()
    wallet = SerializerMethodField()
    documents = SerializerMethodField()
    info = SerializerMethodField()

    class Meta:
        model = CustomUser
        fields = "__all__"

    def get_accounts(self, instance):
        accounts = Account.objects.filter(user=instance)
        return AccountSerializer(accounts, many=True).data

    def get_transactions(self, instance):
        transactions = Transaction.objects.filter(user=instance)
        return TransactionSerializer(transactions, many=True).data

    def get_wallet(self, instance):
        wallet = Wallet.objects.filter(user=instance).first()
        return WalletSerializer(wallet).data

    def get_documents(self, instance):
        doc = VerificationDocuments.objects.filter(user=instance).first()
        if doc:
            return VerificationSerializer(doc).data
        else:
            return None

    def get_info(self, instance):
        i = PersonalInfo.objects.filter(user=instance).first()
        if (i):
            return PersonalInfoSerializer(i).data
        else:
            return None
