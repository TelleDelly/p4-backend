from atexit import register
from django.contrib import admin
from .models import State, Gestational_Limits, Insurance_Coverage, Waiting_Periods, laws_for_minors

# Register your models here.
admin.site.register(State)
admin.site.register(Gestational_Limits)
admin.site.register(Insurance_Coverage)
admin.site.register(Waiting_Periods)
admin.site.register(laws_for_minors)