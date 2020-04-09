from rest_framework import serializers
from .models import World


class WorldSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = World
        fields = ['id', 'name', 'public', 'owner']