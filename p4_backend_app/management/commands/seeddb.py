from sys import stdout
from django.core.management.base import BaseCommand, CommandError
from setuptools import Command
from p4_backend_app.models import Insurance_Coverage, State, Gestational_Limits, Waiting_Periods, laws_for_minors, Insurance_Coverage, laws_for_minors
import os
import json
import requests


#Using documentation from the Django docs for command management and this website: https://towardsdatascience.com/why-you-should-use-async-in-python-6ab53740077e

class Command(BaseCommand):
    # def add_arguments(self, parser):
    #     parser.add_argument('seed_ids', nargs='+', type=int)
    
    # async def get_url(self):
    #     headers = { 'token': os.environ['APIKEY']}
    #     url = 'https://api.abortionpolicyapi.com/v1/gestational_limits/states'
    #     req = requests.get(url, headers=headers)
    #     return req.json()

    def handle(self, *args, **options):
        # loop = asyncio.get_event_loop()
        # tasks = self.get_url()
        # res = loop.run_until_complete(asyncio.gather(tasks))
        # self.stdout.write(res[0])
        headers = { 'token': os.environ['APIKEY']}
        url = 'https://api.abortionpolicyapi.com/v1/insurance_coverage/states'
        req = requests.get(url, headers=headers)
        reqJSON = req.json()
        self.stdout.write(reqJSON['Iowa']['medicaid_exception_fetal'])


        