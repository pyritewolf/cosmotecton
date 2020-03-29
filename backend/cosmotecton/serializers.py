from django.contrib.auth.models import User
from worlds.models import World
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    worlds = serializers.PrimaryKeyRelatedField(many=True, queryset=World.objects.all())

    class Meta:
        model = User
        fields = ['id', 'username', 'worlds']