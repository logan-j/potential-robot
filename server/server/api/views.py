from django.http import HttpResponse, JsonResponse

def ping(request):
    return HttpResponse('pong')

def get_timestamp(request):
    return JsonResponse({'currentTime': 'not-time-stamp'})