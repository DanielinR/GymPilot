from rest_framework import serializers
from . import models


class ExerciseSerializer(serializers.ModelSerializer):
    last_weight = serializers.SerializerMethodField()

    class Meta:
        model = models.Exercise
        fields = ['id', 'name', 'type', 'icon', 'last_weight']

    def get_last_weight(self, obj):
        request = self.context.get("request")
        if request and hasattr(request, "user") and request.user.id:
            return obj.get_last_set_weight(request.user)
        return None

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['type'] = instance.type.name
        return representation


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
    trainingTemplate = serializers.SerializerMethodField()
    date = serializers.SerializerMethodField()

    class Meta:
        model = models.Training
        fields = ['id', 'trainingTemplate', 'date']

    def get_trainingTemplate(self, obj):
        return obj.trainingTemplate.name

    def get_date(self, obj):
        return obj.date.date()


class SetSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Set
        fields = ['id', 'reps', 'weight', 'training', 'exercise']
