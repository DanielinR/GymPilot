from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator
from django.db.models import Q


# Create your models here.
class ExerciseType(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True, related_name='exerciseTypes')
    name = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name}"

    class Meta:
        unique_together = ('name', 'user',)


class Exercise(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True, related_name='exercises')
    type = models.ForeignKey(ExerciseType, on_delete=models.SET_NULL, null=True, blank=True, related_name='exercises')
    name = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name} ({self.type})"

    def get_last_set_weight(self, user):
        last_set_weight = Set.objects.filter(
            Q(exercise__user=user) | Q(exercise__user__isnull=True),
            exercise_id=self.id,
        ).select_related('training').order_by('-training__date', '-id').values().first()
        return last_set_weight['weight'] if last_set_weight else None

    class Meta:
        unique_together = ('name', 'user',)


class TrainingTemplate(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True, related_name='trainingTemplates')
    name = models.CharField(max_length=100)
    exercises = models.ManyToManyField(Exercise, related_name='trainingTemplates')

    def __str__(self):
        return f"{self.name}"

    class Meta:
        unique_together = ('name', 'user',)


class Training(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='trainings')
    trainingTemplate = models.ForeignKey(TrainingTemplate, on_delete=models.SET_NULL, null=True, blank=True, related_name='trainings')
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.trainingTemplate} - {self.date.date()}"


class Set(models.Model):
    id = models.AutoField(primary_key=True)
    reps = models.PositiveSmallIntegerField()
    weight = models.DecimalField(max_digits=5, decimal_places=2, validators=[MinValueValidator(0)])
    training = models.ForeignKey(Training, on_delete=models.CASCADE, related_name='sets')
    exercise = models.ForeignKey(Exercise, on_delete=models.PROTECT, related_name='sets')

    def __str__(self):
        return f"{self.reps} reps of {self.exercise.name} ({self.weight}kg)"
