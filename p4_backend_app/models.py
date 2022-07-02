from unittest.util import _MAX_LENGTH
from django.db import models
from django.forms import IntegerField
from pkg_resources import require

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
    exception_fetal = models.CharField(max_length=23)
    exception_rape_or_incest = models.BooleanField()
    state = models.ForeignKey(State, on_delete=models.CASCADE, related_name='gestational_limits')

    def __str__(self):
        return self.banned_after_weeks_since_LMP

class Waiting_Periods(models.Model):
    waiting_period_hours = models.IntegerField()
    counseling_visits = models.IntegerField()
    exception_health = models.CharField(max_length=48)
    waiting_period_notes = models.CharField(max_length=72)
    state = models.ForeignKey(State, on_delete=models.CASCADE, related_name='waiting_periods')

    def __str__(self):
        return self.waiting_period_hours

class Insurance_Coverage(models.Model):
    requires_coverage = models.BooleanField()
    private_coverage_no_restriction = models.BooleanField()
    private_exception_life = models.BooleanField()
    private_exception_health = models.CharField(max_length=24)
    private_exception_fetal = models.CharField(max_length=24)
    private_exception_rape_or_incest = models.BooleanField()
    exchange_coverage_no_restrictions = models.BooleanField()
    exchange_exception_life = models.BooleanField()
    exchange_exception_health = models.CharField(max_length=28)
    exchange_exception_fetal = models.CharField(max_length=24)
    exchange_exception_rape_or_incest = models.BooleanField()
    exchange_forbids_coverage = models.BooleanField()
    medicaid_coverage_provider_patient_decision = models.BooleanField()
    medicaid_exception_life = models.BooleanField()
    medicaid_exception_health = models.CharField(max_length=12)
    mediacid_exception_fetal = models.CharField(max_length=24)
    mediacid_exception_rape_or_incest = models.BooleanField()
    state = models.ForeignKey(State, on_delete=models.CASCADE, related_name='insurance_coverage')

    def __str__(self):
        return self.requires_coverage

class laws_for_minors(models.Model):
    below_age = models.IntegerField()
    parental_consent_required = models.BooleanField()
    parental_notification_required = models.BooleanField()
    parents_required = models.IntegerField()
    judicial_bypass_available = models.BooleanField()
    allows_minor_to_consent = models.BooleanField()
    state = models.ForeignKey(State, on_delete=models.CASCADE, related_name='laws_for_minors')

    def __str__(self):
        return self.below_age

