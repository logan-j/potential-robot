from django.http import HttpResponse, JsonResponse
from datetime import datetime

def ping(request):
    return HttpResponse('pong')

def get_timestamp(request, timestamp_func=datetime.now):
    return JsonResponse({'currentTime': timestamp_func().strftime('%Y-%m-%d %H:%M:%S')})