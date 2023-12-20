export function calculateDaysInMonth(month: number, year: number) {
  return new Date(year, month, 0).getDate();
};

export function filterJsonEquals(json: any,filters?:{key:string, value:string}[]) {
  if (!filters) return json
  for (var i = 0; i < filters.length; i++) {
    json = json.filter((item: any) =>
      item[filters[i].key].toLowerCase() == (filters[i].value.toLowerCase())
    );
  }
  return json
};


export function filterJsonIncludes(json: any,filters?:{key:string, value:string}[]) {
  if (!filters) return json
  for (var i = 0; i < filters.length; i++) {
    json = json.filter((item: any) =>
    item[filters[i].key].toLowerCase().includes(filters[i].value.toLowerCase())
    );
  }
  return json
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

export const isMediumScreenOrLarger = () => {
  return window.innerWidth >= 768;
};
