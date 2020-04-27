from rest_framework import serializers
from .models import World, Story


class WorldSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    stories = serializers.PrimaryKeyRelatedField(many=True, queryset=Story.objects.all())

    class Meta:
        model = World
        fields = ['id', 'name', 'public', 'owner', 'stories']


class StorySerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    world = serializers.PrimaryKeyRelatedField(queryset=World.objects.all())

    class Meta:
        model = Story
        fields = ['id', 'title', 'public', 'owner', 'world', 'world_id']