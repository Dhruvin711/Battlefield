from django.db import models

# Create your models here.

class LevelStat(models.Model):
    totalPoints = models.IntegerField()

    totalWeapons = models.IntegerField()
    totalKits = models.IntegerField()
    totalVehicals = models.IntegerField()
    totalMedals = models.IntegerField()
    totalAssignments = models.IntegerField()
    totalDogTags = models.IntegerField()

class Soldier(models.Model):
    soldierPoints = models.IntegerField()

    weapons = models.IntegerField()
    kits = models.IntegerField()
    vehicals = models.IntegerField()
    medals = models.IntegerField()
    assignments = models.IntegerField()
    dogTags = models.IntegerField()

    winsPercentage = models.FloatField()
    scorePerMin = models.FloatField()
    killsPerMin = models.FloatField()

    topVehical = models.CharField(max_length=100)
    topVehicalKills = models.IntegerField()

    topPrimary = models.CharField(max_length=100)
    topPrimaryKills = models.IntegerField()

    topClass = models.CharField(max_length=100)
    topClassScore = models.IntegerField()

    topSidearm = models.CharField(max_length=100)
    topSidearmKills = models.IntegerField()