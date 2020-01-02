from django.db import models


class World(models.Model):
  name = models.CharField(max_length=200)
  public = models.BooleanField(default=False)


class Theme(models.Model):
  world = models.ForeignKey(World, on_delete=models.CASCADE)
  title = models.CharField(max_length=200)
  description = models.TextField()