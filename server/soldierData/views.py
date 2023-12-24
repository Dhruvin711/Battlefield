from django.shortcuts import render
from django.http import HttpResponse
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Soldier, LevelStat
from .serializers import SoldierSerializer, LevelStatSerializer
from rest_framework import status

# Create your views here.

@api_view(["GET"])
def getSoldierData(request):
    try:
        soldierObject = Soldier.objects.all()

        if not soldierObject.exists():
            raise ObjectDoesNotExist

    except ObjectDoesNotExist:
        return Response({
            'success': False,
            'message': 'Soldier-data not found!'
        }, status=status.HTTP_404_NOT_FOUND)

    except Exception as e:
        return Response({
            'success': False,
            'message': f'An unexpected error occurred: {str(e)}'
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    soldierSerializer = SoldierSerializer(soldierObject, many=True)

    soldierData = soldierSerializer.data[0] if soldierSerializer.data != [] else {}

    return Response({
        'soldierData': soldierData,
        'success': True
    }, status=status.HTTP_200_OK)

@api_view(["GET"])
def getLevelStats(request):
    try:
        levelStatObject = LevelStat.objects.all()

        if not levelStatObject.exists():
            raise ObjectDoesNotExist

    except ObjectDoesNotExist:
        return Response({
            'success': False,
            'message': 'Level-stats not found!'
        }, status=status.HTTP_404_NOT_FOUND)

    except Exception as e:
        return Reponse({
            'success': False,
            'message': f'An unexpected error occurred: {str(e)}'
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    levelStatSerializer = LevelStatSerializer(levelStatObject, many=True)

    levelStats = levelStatSerializer.data[0] if levelStatSerializer.data != [] else {}

    return Response({
        'levelStats': levelStats,
        'success': True
    }, status=status.HTTP_200_OK)