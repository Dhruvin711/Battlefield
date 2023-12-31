# Generated by Django 4.1.13 on 2023-12-22 10:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='soldier',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('soldierPoints', models.IntegerField()),
                ('weapons', models.IntegerField()),
                ('kits', models.IntegerField()),
                ('vehicals', models.IntegerField()),
                ('medals', models.IntegerField()),
                ('assignments', models.IntegerField()),
                ('dogTags', models.IntegerField()),
                ('winsPercentage', models.IntegerField()),
                ('scorePerMin', models.IntegerField()),
                ('killsPerMin', models.IntegerField()),
                ('topVehical', models.CharField(max_length=100)),
                ('topVehicalKills', models.IntegerField()),
                ('topPrimary', models.CharField(max_length=100)),
                ('topPrimaryKills', models.IntegerField()),
                ('topClass', models.CharField(max_length=100)),
                ('topClassScore', models.IntegerField()),
                ('topSidearm', models.CharField(max_length=100)),
                ('topSidearmKills', models.IntegerField()),
            ],
        ),
    ]
