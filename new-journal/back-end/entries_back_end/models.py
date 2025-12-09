import datetime
from django.db import models
from django.utils import timezone
# Create your models here.

class Entries(models.Model):
  tittle_text = models.CharField(1000)
  entry_text = models.CharField(1000)
  save_date = models.DateTimeField("date published")

  def __str__(self):
    return self.tittle_text
  
  def was_published_recently(self):
    return self.save_date >= timezone.now() - datetime.timedelta(days = 1)

class Users(models.Model):
  username = models.ForeignKey(Entries, on_delete = models.CASCADE)
  password = models.CharField(max_length=200)
  def __str__(self):
    return self.username
  