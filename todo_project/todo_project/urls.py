
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from todo.views import TodoItemViewSet


router = DefaultRouter()
router.register(r'todo', TodoItemViewSet, basename='todo')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]
