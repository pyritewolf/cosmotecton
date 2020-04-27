from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import viewsets, permissions
from .serializers import WorldSerializer, StorySerializer
from .models import World, Story
from .permissions import IsOwnerOrReadOnly

class WorldViewSet(viewsets.ModelViewSet):
    queryset = World.objects.all()
    serializer_class = WorldSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class StoryViewSet(viewsets.ModelViewSet):
    queryset = Story.objects.all()
    serializer_class = StorySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        print(self.request.user)
        serializer.save(owner=self.request.user)