from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'exercises', views.ExerciseViewSet)
router.register(r'trainingTemplates', views.TrainingTemplateViewSet)
router.register(r'trainings', views.TrainingViewSet)
router.register(r'sets', views.SetViewSet)

urlpatterns = [
    path('/', include(router.urls))
]
