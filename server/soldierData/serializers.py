from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from .models import Soldier

class SoldierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Soldier
        fields = '__all__'