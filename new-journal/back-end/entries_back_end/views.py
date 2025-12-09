from django.http import Http404
from django.shortcuts import HttpResponse,render
from django.template import loader
from .models import Entries
def index(request):
  latest_entry_list = Entries.objects.order_by("-save_date")[:5]
  
  template = loader.get_template("entries_back_end/index.html")
  context = {"latest_entry_list": latest_entry_list}

  return render(request,"entries_back_end/templates/entries_back_end/index.html",context)
  
  #return HttpResponse(template.render(context,request))

def tittle(request,entry_id):
  try:
    tittle = Entries.objects.get(pk=entry_id)

  except Entries.DoesNotExist:
    raise Http404("Tittle does not exist") 

  return render(request,"",{"tittle":tittle})

def entry_body(request,entry_id):
  response = "you are looking at the full entry %s."
  return HttpResponse(response % entry_id)

def add(request,entry_id):
  return HttpResponse("you are adding %s" % entry_id)