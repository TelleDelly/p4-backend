import os
import requests
import json

gestation_limit_url = 'https://api.abortionpolicyapi.com/v1/gestational_limits/states'
headers = { 'token': os.environ['APIKEY']}

req = requests.get(gestation_limit_url, headers=headers)
