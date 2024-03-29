from django.db.models.functions import TruncDate
from rest_framework import viewsets, views, permissions, status
from rest_framework.response import Response
from django.db import transaction
from django.db.models import Q, Avg, ExpressionWrapper, F, fields
from . import serializers
from . import models
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from dj_rest_auth.registration.views import SocialLoginView


class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    callback_url = "https://gympilot.danielin.xyz/login"
    client_class = OAuth2Client

# Create your views here.
class ExerciseViewSet(viewsets.ModelViewSet):
    queryset = models.Exercise.objects.all()
    serializer_class = serializers.ExerciseSerializer

    def get_queryset(self):
        return models.Exercise.objects.filter(user=self.request.user) | models.Exercise.objects.filter(user=None)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class TrainingTemplateViewSet(viewsets.ModelViewSet):
    queryset = models.TrainingTemplate.objects.all()
    serializer_class = serializers.TrainingTemplateSerializer

    def get_queryset(self):
        return models.TrainingTemplate.objects.filter(user=self.request.user) | models.TrainingTemplate.objects.filter(user=None)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class TrainingViewSet(viewsets.ModelViewSet):
    queryset = models.Training.objects.all()
    serializer_class = serializers.TrainingSerializer

    def get_queryset(self):
        return models.Training.objects.filter(user=self.request.user) | models.Training.objects.filter(user=None)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class SetViewSet(viewsets.ModelViewSet):
    queryset = models.Set.objects.all()
    serializer_class = serializers.SetSerializer

    def get_queryset(self):
        return models.Set.objects.filter(user=self.request.user) | models.Set.objects.filter(user=None)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ExerciseTypeViewSet(viewsets.ModelViewSet):
    queryset = models.ExerciseType.objects.all()
    serializer_class = serializers.ExerciseTypeSerializer

    def get_queryset(self):
        return models.ExerciseType.objects.filter(user=self.request.user) | models.ExerciseType.objects.filter(user=None)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class MonthTrainedDays(views.APIView):

    def get(self, request, year, month):
        month_trainings = models.Training.objects.filter(
            user=request.user,
            date__year=year,
            date__month=month
        ).values('date')

        days_trained = list(set([training['date'].date().day for training in month_trainings]))
        return Response({'days_trained': days_trained})


class LastWeightFromExercise(views.APIView):

    def get(self, request, exercise_id):
        exercise = models.Exercise.objects.get(id=exercise_id)
        weight = exercise.get_last_set_weight(request.user)
        return Response({"weight": weight})


class CountExerciseTemplates(views.APIView):

    def get(self, request):
        data = []
        for template in models.TrainingTemplate.objects.filter(user=request.user) | models.TrainingTemplate.objects.filter(user=None):
            data.append({"label": template.name, "value": models.Training.objects.filter(trainingTemplate=template, user=request.user).count()})
        return Response(data)


class CountExerciseSets(views.APIView):

    def get(self, request):
        data = []
        for exercise in models.Exercise.objects.filter(user=request.user) | models.Exercise.objects.filter(user=None):
            count = models.Set.objects.filter(exercise=exercise, training__user=request.user).count()
            if count != 0:
                data.append({"label": exercise.name, "value": count})
        return Response(data)


class CountExerciseTypeSets(views.APIView):

    def get(self, request):
        data = []
        for exerciseType in models.ExerciseType.objects.filter(user=request.user) | models.ExerciseType.objects.filter(user=None):
            data.append({"label": exerciseType.name, "value": models.Set.objects.filter(exercise__type=exerciseType, training__user=request.user).count()})
        return Response(data)


class WeightLiftedTimes(views.APIView):

    def get(self, request, exercise_id):
        exercise_sets = models.Set.objects.filter(exercise__id=exercise_id, training__user=request.user)
        grouped = exercise_sets.annotate(training_date=TruncDate('training__date')).values("training__date").annotate(totalWeight=Avg( ExpressionWrapper(F('reps') * F('weight'), output_field=fields.DecimalField())))
        result = [
            {'date': item['training__date'].strftime("%Y/%m/%d"),
             'value': float(item['totalWeight'])}
            for item in grouped
        ]
        return Response(result)


class CreateTraining(views.APIView):

    def create_sets_from_exercise(self, sets_json, exercise_id, training):
        for set in sets_json:
            new_set = models.Set(reps=set["reps"], weight=set["weight"],
                                 exercise=models.Exercise.objects.get(id=exercise_id), training=training)
            new_set.save()

    @transaction.atomic
    def post(self, request):
        try:
            data_json = request.data
            if len(data_json["exercises"]) == 0: return Response({"error": "Not exercises included"},
                                                                 status=status.HTTP_400_BAD_REQUEST)
            new_train = models.Training(user=request.user, trainingTemplate=models.TrainingTemplate.objects.get(
                id=data_json["templateId"]))
            new_train.save()
            for exercise_train in data_json["exercises"]:
                self.create_sets_from_exercise(exercise_train['sets'], exercise_train['exercise']['id'], new_train)
            return Response({"status": "success"}, status=status.HTTP_201_CREATED)

        except models.TrainingTemplate.DoesNotExist:
            return Response({"error": "Training template not found"}, status=status.HTTP_404_NOT_FOUND)
        except models.Exercise.DoesNotExist:
            return Response({"error": "Exercise not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class AddExercise(views.APIView):

    @transaction.atomic
    def put(self, request, template_id):
        try:
            if request is None or request.data is None: return Response({"error": "Not exercises included"},
                                                                 status=status.HTTP_400_BAD_REQUEST)

            data_json = request.data
            exercise = models.Exercise.objects.get(id=data_json["id"])
            template = models.TrainingTemplate.objects.get(id=template_id)
            if template.user != request.user or (exercise.user != request.user and exercise.user is not None):
                return Response({"error": "Unauthorized"}, status=status.HTTP_401_UNAUTHORIZED)
            template.exercises.add(exercise)
            template.save()
            return Response({"status": "success"}, status=status.HTTP_200_OK)

        except models.TrainingTemplate.DoesNotExist:
            return Response({"error": "Training template not found"}, status=status.HTTP_404_NOT_FOUND)
        except models.Exercise.DoesNotExist:
            return Response({"error": "Exercise not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class DeleteExercise(views.APIView):

    @transaction.atomic
    def put(self, request, template_id):
        try:
            if request is None or request.data is None: return Response({"error": "Not exercises included"},
                                                                 status=status.HTTP_400_BAD_REQUEST)

            data_json = request.data
            exercise = models.Exercise.objects.get(id=data_json["id"])
            template = models.TrainingTemplate.objects.get(id=template_id)
            if template.user != request.user or (exercise.user != request.user and exercise.user is not None):
                return Response({"error": "Unauthorized"}, status=status.HTTP_401_UNAUTHORIZED)
            template.exercises.remove(exercise)
            template.save()
            return Response({"status": "success"}, status=status.HTTP_200_OK)

        except models.TrainingTemplate.DoesNotExist:
            return Response({"error": "Training template not found"}, status=status.HTTP_404_NOT_FOUND)
        except models.Exercise.DoesNotExist:
            return Response({"error": "Exercise not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class CheckAuth(views.APIView):

    def post(self, request):
        return Response({"status": "success"}, status=status.HTTP_200_OK)
