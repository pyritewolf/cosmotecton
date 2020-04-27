from django.db import models


class World(models.Model):
  name = models.CharField(max_length=200)
  public = models.BooleanField(default=False)
  owner = models.ForeignKey('auth.User', related_name='worlds', on_delete=models.CASCADE)


class Story(models.Model):
  world = models.ForeignKey(World, related_name='stories', on_delete=models.CASCADE)
  title = models.CharField(max_length=200)
  public = models.BooleanField(default=False)
  description = models.TextField()
  owner = models.ForeignKey('auth.User', related_name='stories', on_delete=models.CASCADE)
