from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator


# Create your models here.
class Exercise(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True, related_name='exercises')
    name = models.CharField(max_length=100)

    class Meta:
        unique_together = ('name', 'user',)


class TrainingTemplate(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True, related_name='trainingTemplates')
    name = models.CharField(max_length=100)
    exercises = models.ManyToManyField(Exercise, related_name='trainingTemplates')

    class Meta:
        unique_together = ('name', 'user',)


class Training(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='trainings')
    trainingTemplate = models.ForeignKey(TrainingTemplate, on_delete=models.SET_NULL, null=True, blank=True, related_name='trainings')
    date = models.DateTimeField(auto_now_add=True)


class Set(models.Model):
    id = models.AutoField(primary_key=True)
    reps = models.PositiveSmallIntegerField()
    weight = models.DecimalField(max_digits=5, decimal_places=2, validators=[MinValueValidator(0)])
    training = models.ForeignKey(Training, on_delete=models.CASCADE, related_name='sets')
    exercise = models.ForeignKey(Exercise, on_delete=models.PROTECT, related_name='sets')

