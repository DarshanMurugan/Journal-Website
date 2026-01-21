import datetime
from django.db import models
from django.utils import timezone
# Create your models here.

class Entries(models.Model):
  title_text = models.CharField(1000)
  entry_text = models.TextField()
  save_date = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return self.title_text
  
  def was_published_recently(self):
    return self.save_date >= timezone.now() - datetime.timedelta(days = 1)

class Users(models.Model):
  username = models.ForeignKey(Entries, on_delete = models.CASCADE)
  password = models.CharField(max_length=200)
  def __str__(self):
    return self.username
  
