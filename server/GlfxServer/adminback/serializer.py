from manager.models import *
from rest_framework.serializers import ModelSerializer, SerializerMethodField
from manager.serializer import AccountSerializer, TransactionSerializer, WalletSerializer


class UserAdminSerializer(ModelSerializer):

    accounts = SerializerMethodField()
    transactions = SerializerMethodField()
    wallet = SerializerMethodField()

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
