#made to acces the view in django. To acces in on browser, we need to maap it to
# a url configuration. these are defined here at urls.py

from django.urls import path

from . import views

app_name = "journal-entry"

urlpatterns = [
  path("", views.index, name = "index"),

  path("tittle/<int:entry_id>/", views.tittle,name= "tittle"),

  path("<int:entry_id>/entry/",views.entry_body, name="entry"),

  path("<int:entry_id>/add/",views.add, name="add")
]
