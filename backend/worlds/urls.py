from django.urls import path
from worlds import views

urlpatterns = [
    path('world/', views.world_list),
    path('world/<int:pk>/', views.world_detail),
]