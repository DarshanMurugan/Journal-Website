from rest_framework import generics
from rest_framework.generics import RetrieveAPIView
from .models import Entries
from .serializers import EntrySerializer

class EntryCreateView(generics.ListCreateAPIView):
    queryset = Entries.objects.all()
    serializer_class = EntrySerializer

class GetContent(RetrieveAPIView):
    queryset = Entries.objects.all()
    serializer_class = EntrySerializer



