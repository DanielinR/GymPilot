from rest_framework import viewsets
from . import serializers
from . import models


# Create your views here.
class ExerciseViewSet(viewsets.ModelViewSet):
    queryset = models.Exercise.objects.all()
    serializer_class = serializers.ExerciseSerializer


class TrainingTemplateViewSet(viewsets.ModelViewSet):
    queryset = models.TrainingTemplate.objects.all()
    serializer_class = serializers.TrainingTemplateSerializer


class TrainingViewSet(viewsets.ModelViewSet):
    queryset = models.Training.objects.all()
    serializer_class = serializers.TrainingSerializer


class SetViewSet(viewsets.ModelViewSet):
    queryset = models.Set.objects.all()
    serializer_class = serializers.SetSerializer
