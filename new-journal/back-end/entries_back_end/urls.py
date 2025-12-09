#made to acces the view in django. To acces in on browser, we need to maap it to
# a url configuration. these are defined here at urls.py

from django.urls import path

from . import views

urlpatterns = [
  path("", views.index, name = "index"),

  path("tittle/<int:entry_id>/", views.detail,name= "detail"),

  path("<int:entry_id>/entry/",views.entry_body, name="entry_body"),

  path("<int:entry_id>/add/",views.add, name="add")
]