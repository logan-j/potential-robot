from django.test import TestCase
import json

class ApiTestClass(TestCase):
    def test_ping(self):
        response = self.client.get('/api/ping')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content, b'pong')

    def test_get_timestamp_returns_200(self):
        response = self.client.get('/api/timestamp')
        self.assertEqual(response.status_code, 200)

    def test_get_timestamp_returns_correct_content(self):
        response = self.client.get('/api/timestamp')
        body = json.loads(response.content)
        self.assertTrue('currentTime' in body.keys())
        self.assertEqual(response['Content-Type'], 'application/json')