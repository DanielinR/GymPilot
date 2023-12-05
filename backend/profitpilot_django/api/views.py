from rest_framework import viewsets, views, permissions, status
from rest_framework.response import Response
from django.db import transaction
from django.db.models import Q
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
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, year, month):
        month_trainings = models.Training.objects.filter(
            user=request.user,
            date__year=year,
            date__month=month
        ).values('date')

        days_trained = list(set([training['date'].date().day for training in month_trainings]))
        return Response({'days_trained': days_trained})


class LastWeightFromExercise(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, exerciseId):
        last_set_weight = models.Set.objects.filter(
            Q(exercise__user=request.user) | Q(exercise__user__isnull=True),
            exercise_id=exerciseId,
        ).values('weight').select_related('training').order_by('-training__date', '-id').first()
        weight = last_set_weight['weight'] if last_set_weight else None
        return Response({"weight": weight})


class CreateTraining(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def createSetsFromExercise(self, sets_json, exercise_id, training):
        for set in sets_json:
            new_set = models.Set(reps=set["reps"],weight=set["weight"], exercise=models.Exercise.objects.get(id=exercise_id), training=training)
            new_set.save()

    @transaction.atomic
    def post(self, request):
        try:
            data_json = request.data
            if len(data_json["exercises"]) == 0: return Response({"error": "Not exercises included"}, status=status.HTTP_400_BAD_REQUEST)
            new_train = models.Training(user=request.user, trainingTemplate=models.TrainingTemplate.objects.get(id=data_json["templateId"]))
            new_train.save()
            for exercise_train in data_json["exercises"]:
                self.createSetsFromExercise(exercise_train['sets'], exercise_train['exercise']['id'], new_train)
            return Response({"status": "success"}, status=status.HTTP_201_CREATED)

        except models.TrainingTemplate.DoesNotExist:
            return Response({"error": "Training template not found"}, status=status.HTTP_404_NOT_FOUND)
        except models.Exercise.DoesNotExist:
            return Response({"error": "Exercise not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
