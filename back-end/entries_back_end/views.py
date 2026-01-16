from django.http import Http404
from django.shortcuts import HttpResponse,render
from django.template import loader
from .models import Entries
from django.http import JsonResponse
def index(request):
    latest_entry_list = Entries.objects.order_by("-save_date")[:5]
    data = [
        {
            "id": entry.id,
            "tittle_text": entry.tittle_text,
            "save_date": entry.save_date.isoformat()
        }
        for entry in latest_entry_list

    ]

    return JsonResponse(data, safe=False)


def tittle(request,entry_id):
    try:
        tittle = Entries.objects.get(pk=entry_id)

    except Entries.DoesNotExist:
        raise Http404("Tittle does not exist") 

    return render(request,"",{"entries_back_end/tittle.html":tittle})

def entry_body(request,entry_id):
    entry = get_object_or_404(Entries, pk=entry_id)
    return render(request,"entries_back_end/detail.html",{"entry":entry})

def add(request,entry_id):
  return HttpResponse("you are adding %s" % entry_id)
