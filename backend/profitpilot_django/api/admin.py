from django.contrib import admin
from . import models

# Register your models here.


class ExerciseInline(admin.TabularInline):
    model = models.TrainingTemplate.exercises.through
    extra = 1  # Número de formas en blanco para nuevos Exercises


class TrainingTemplateAdmin(admin.ModelAdmin):
    inlines = [ExerciseInline]
    exclude = ('exercises',)


admin.site.register(models.TrainingTemplate, TrainingTemplateAdmin)
admin.site.register(models.ExerciseType)
admin.site.register(models.Set)
admin.site.register(models.Exercise)
admin.site.register(models.Training)
