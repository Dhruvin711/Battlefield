from . import views
from django.urls import path
from .views import getSoldierData

urlpatterns = [
    path('bf_4/soldier-data/', views.getSoldierData, name='Sodlier Data'),
]