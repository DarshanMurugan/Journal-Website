from rest_framework import generics
from .models import Entries
from .serializers import EntrySerializer

class EntryCreateView(generics.ListCreateAPIView):
    queryset = Entries.objects.all()
    serializer_class = EntrySerializer
