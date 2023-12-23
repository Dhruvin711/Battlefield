from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from .models import Soldier, LevelStat

class SoldierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Soldier
        fields = '__all__'

class LevelStatSerializer(serializers.ModelSerializer):
    class Meta:
        model = LevelStat
        fields = '__all__'