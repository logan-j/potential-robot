from django.test import TestCase
from datetime import datetime
import json

from . import views

class ApiTestClass(TestCase):
    # integration
    def test_ping(self):
        response = self.client.get('/api/ping')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content, b'pong')

    def test_get_timestamp_returns_200(self):
        response = self.client.get('/api/timestamp')
        self.assertEqual(response.status_code, 200)

    # unit
    def test_get_timestamp_returns_correct_content(self):
        date = datetime(1990, 3, 20, 19, 59, 29)
        response = views.get_timestamp(None, date)
        body = json.loads(response.content)
        
        self.assertTrue('currentTime' in body.keys())
        self.assertEqual(response['Content-Type'], 'application/json')
        self.assertEqual(body.get('currentTime'), '1990-03-20 19:59:29')