from django.http import HttpResponse, JsonResponse
from datetime import datetime

def ping(request):
    return HttpResponse('pong')

def get_timestamp(request, time_to_display=datetime.now()):
    return JsonResponse({'currentTime': time_to_display.strftime('%Y-%m-%d %H:%M:%S')})