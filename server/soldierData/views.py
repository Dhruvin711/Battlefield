from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Soldier, LevelStat
from .serializers import SoldierSerializer, LevelStatSerializer

# Create your views here.

@api_view(["GET"])
def getSoldierData(request):
    soldierObject = Soldier.objects.all()
    soldierSerializer = SoldierSerializer(soldierObject, many=True)

    levelStatObject = LevelStat.objects.all()
    levelStatSerializer = LevelStatSerializer(levelStatObject, many=True)

    soldierData = soldierSerializer.data[0] if soldierSerializer.data != [] else {}
    levelStats = levelStatSerializer.data[0] if levelStatSerializer.data != [] else {}


    return Response({
        'soldierData': soldierData,
        'levelStats': levelStats
    })