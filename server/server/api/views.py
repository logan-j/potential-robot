from django.http import HttpResponse

def ping(request):
    return HttpResponse('pong')

def get_timestamp(request):
    return HttpResponse('not_timestamp')