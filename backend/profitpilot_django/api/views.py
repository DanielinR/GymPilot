from rest_framework import viewsets
from rest_framework import views
from rest_framework.response import Response
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


class ExerciseTypeViewSet(viewsets.ModelViewSet):
    queryset = models.ExerciseType.objects.all()
    serializer_class = serializers.ExerciseTypeSerializer


class MonthTrainedDays(views.APIView):
    def get(self, request, year, month):
        month_trainings = models.Training.objects.filter(
            user=1, #TODO
            date__year=year,
            date__month=month
        ).values('date')

        days_trained = list(set([training['date'].date().day for training in month_trainings]))
        return Response({'days_trained': days_trained})
    