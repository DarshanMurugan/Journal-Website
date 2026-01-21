from rest_framework import serializers
from .models import Entries

class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entries
        fields = ['id','title_text','entry_text','save_date']
        read_only_fields = ['id','save_date']
