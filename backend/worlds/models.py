from django.db import models
from django.conf import settings


class World(models.Model):
  name = models.CharField(max_length=200)
  public = models.BooleanField(default=False)
  owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='worlds', on_delete=models.CASCADE)


class Theme(models.Model):
  world = models.ForeignKey(World, on_delete=models.CASCADE)
  title = models.CharField(max_length=200)
  description = models.TextField()
  owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='themes', on_delete=models.CASCADE)