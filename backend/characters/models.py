from django.db import models
from worlds.models import World


class Character(models.Model):
  first_name = models.CharField(max_length=200)
  last_name = models.CharField(max_length=200)
  world = models.ForeignKey(World, on_delete=models.CASCADE)
