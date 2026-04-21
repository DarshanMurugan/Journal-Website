import datetime
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField
# Create your models here.

class Entries(models.Model):
    owner = models.ForeignKey(User,on_delete=models.CASCADE)
    title_text = models.CharField(1000)
    entry_text = models.TextField()
    save_date = models.DateTimeField(auto_now_add=True)
    entry_vector = ArrayField(models.FloatField(),default=list)
    is_embedded = models.BooleanField(default=False)

    def __str__(self):
        return self.title_text

    def was_published_recently(self):
        return self.save_date >= timezone.now() - datetime.timedelta(days = 1)

