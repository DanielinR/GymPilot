from rest_framework import serializers
from . import models


class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Exercise
        fields = ['id', 'name', 'type']


class ExerciseTypeSerializer(serializers.ModelSerializer):
    exercises = ExerciseSerializer(many=True, read_only=True)
    class Meta:
        model = models.ExerciseType
        fields = ['id', 'name', 'exercises']


class TrainingTemplateSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.TrainingTemplate
        fields = ['id', 'name', 'exercises']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['exercises'] = ExerciseSerializer(instance.exercises.all(), many=True).data
        return representation


class TrainingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Training
        fields = ['id', 'trainingTemplate', 'date']


class SetSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Set
        fields = ['id', 'reps', 'weight', 'training', 'exercise']
