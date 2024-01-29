from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'exercises', views.ExerciseViewSet)
router.register(r'trainingTemplates', views.TrainingTemplateViewSet)
router.register(r'trainings', views.TrainingViewSet)
router.register(r'sets', views.SetViewSet)
router.register(r'exerciseTypes', views.ExerciseTypeViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('monthTrainedDays/<int:month>/<int:year>/', views.MonthTrainedDays.as_view(), name='monthTrainedDays'),
    path('lastWeightFromExercise/<int:exercise_id>/', views.LastWeightFromExercise.as_view(), name='lastWeightFromExercise'),
    path('trainingTemplates/<int:template_id>/addExercise/', views.AddExercise.as_view(), name='addExercise'),
    path('trainingTemplates/<int:template_id>/deleteExercise/', views.DeleteExercise.as_view(), name='deleteExercise'),
    path('countExerciseTemplates/', views.CountExerciseTemplates.as_view(), name='countExerciseTemplates'),
    path('countExerciseSets/', views.CountExerciseSets.as_view(), name='countExerciseSets'),
    path('countExerciseTypeSets/', views.CountExerciseTypeSets.as_view(), name='countExerciseTypeSets'),
    path('weightLiftedTimes/<int:exercise_id>/', views.WeightLiftedTimes.as_view(), name='weightLiftedTimes'),
    path('createTraining/', views.CreateTraining.as_view(), name='createTraining'),
    path('checkAuth/', views.CheckAuth.as_view(), name='checkAuth'),
]
