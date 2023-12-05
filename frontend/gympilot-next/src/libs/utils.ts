export function calculateDaysInMonth(month: number) {
  return new Date(2023, month + 1, 0).getDate();
};

export enum phases {
  TrainingTemplates,
  Exercises,
  Sets,
};

export type Set = {
  reps: number;
  weight: number;
};
export type ExerciseTrain = {
  exercise: Exercise,
  sets: Set[];
};

export type Exercise = {
  id: number,
  name: string;
};

