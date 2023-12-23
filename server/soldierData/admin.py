from django.contrib import admin

# Register your models here.
from .models import Soldier, LevelStat

admin.site.register(Soldier)
admin.site.register(LevelStat)