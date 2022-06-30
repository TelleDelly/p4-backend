from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.
class State(models.Model):
    name = models.CharField(max_length=35)
    abbreviation = models.CharField(max_length=3)

    def __str__(self):
        return self.abbreviation