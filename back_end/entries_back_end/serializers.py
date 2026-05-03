from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Entries

class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entries
        fields = ['id','title_text','entry_text','save_date','entry_vectors']
        read_only_fields = ['id','save_date']


class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User 
        fields = ['username','password']
        extra_kwargs = {
            'password': {'write_only': True}
        }
    def create(self,validated_data):
        user = User(
            username = validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user 
