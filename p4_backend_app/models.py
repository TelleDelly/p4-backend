from unittest.util import _MAX_LENGTH
from django.db import models
from django.forms import IntegerField

# Create your models here.
class State(models.Model):
    name = models.CharField(max_length=35)
    abbreviation = models.CharField(max_length=3)

    def __str__(self):
        return self.abbreviation


class Gestational_Limits(models.Model):
    banned_after_weeks_since_LMP = models.IntegerField()
    exception_life = models.BooleanField()
    exception_health = models.CharField(max_length=23)
    exception_fetal = models.CharField(23)
    exception_rape_or_incest = models.BooleanField()
    state = models.ForeignKey(State, on_delete=models.CASCADE, related_name='gestational_limits')

    def __str__(self):
        return self.banned_after_weeks_since_LMP

class Waiting_Periods(models.Model):
    waiting_period_hours = models.IntegerField()
    counseling_visits = models.IntegerField()
    exception_health = models.CharField(max_length=48)
    waiting_period_notes = models.CharField(max_length=72)

    def __str__(self):
        return self.waiting_period_hours