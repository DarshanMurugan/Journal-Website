#made to acces the view in django. To acces in on browser, we need to maap it to
# a url configuration. these are defined here at urls.py

from django.urls import path

from .views import EntryCreateView

app_name = "journal-entry"

urlpatterns = [
    path('',EntryCreateView.as_view(),name = 'entries'),
]
