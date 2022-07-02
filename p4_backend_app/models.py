from calendar import MONDAY
from datetime import datetime
from time import timezone
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

# Edit Migrations to include the time created default = datetime.time.now (7/2)

class User(models.Model):
    user_phrase = models.CharField(max_length=25)
    user_pass = models.CharField(max_length=25)
    time_created = models.TimeField()

    def __str__(self):
        return self.user_phrase

class Clinic(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=60)
    city = models.CharField(max_length=40)
    state = models.CharField(max_length=20)
    zip = models.IntegerField()
    latitude = models.FloatField()
    longtitude = models.FloatField()
    email = models.EmailField()
    phone_number = models.CharField(max_length=12)
    website = models.URLField()

    def __str__(self):
        return self.name

class Review(models.Model):
    title = models.CharField(max_length=100)
    body = models.CharField(max_length=600)
    time_created = models.TimeField()
    user_key = models.ForeignKey(User, on_delete=models.CASCADE, related_name='review')
    clinic_key = models.ForeignKey(Clinic, on_delete=models.CASCADE, related_name='review')

    def __str__(self):
        return self.title

class Story(models.Model):
    title = models.CharField(max_length=125)
    body = models.TextField(max_length=4000)
    time_created = models.TimeField()
    user_key = models.ForeignKey(User, on_delete=models.CASCADE, related_name='story')

    def __str__(self):
        return self.title

class Social(models.Model):
    name = models.CharField(max_length=45)
    url = models.URLField()
    clinic_id = models.ForeignKey(Clinic, on_delete=models.CASCADE, related_name='social')

    def __str__(self):
        return self.name

class Service(models.Model):
    name = models.CharField(max_length=35)
    clinic_id = models.ForeignKey(Clinic, on_delete=models.CASCADE, related_name='service')

    def __str__(self):
        return self.name

class Picture(models.Model):
    alt = models.CharField(max_length=45)
    url = models.URLField()
    clinic_id = models.ForeignKey(Clinic, on_delete=models.CASCADE, related_name='picture')

    def __str__(self):
        return self.alt

class Hours(models.Model):
    monday = models.CharField(max_length=50)
    tuesday = models.CharField(max_length=50)
    wednesday = models.CharField(max_length=50)
    thursday = models.CharField(max_length=50)
    friday = models.CharField(max_length=50)
    saturday = models.CharField(max_length=50)
    sunday = models.CharField(max_length=50)
    clinic_id = models.ForeignKey(Clinic, on_delete=models.CASCADE, related_name='hours')

    def __str__(self):
        return self.monday
