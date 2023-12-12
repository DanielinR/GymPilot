export function calculateDaysInMonth(month: number, year: number) {
  return new Date(year, month, 0).getDate();
};

export enum phases {
  TrainingTemplates,
  WatchActualTraining,
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

export type Template = {
  id: number,
  name: string;
};

