from django.test import TestCase

class ApiTestClass(TestCase):
    def test_ping(self):
        response = self.client.get('/api/ping')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content, b'pong')
