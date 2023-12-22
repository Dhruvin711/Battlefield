from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Soldier
from .serializers import SoldierSerializer

# Create your views here.

@api_view(["GET"])
def getSoldierData(request):
    soldierData = Soldier.objects.all()
    serializer = SoldierSerializer(soldierData, many=True)

    return Response(serializer.data)