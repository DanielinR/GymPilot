export function calculateDaysInMonth(month: number, year: number) {
  return new Date(year, month, 0).getDate();
}

export function filterJsonEquals(
  json: any,
  filters?: { key: string; value: string }[]
) {
  if (!filters) return json;
  for (var i = 0; i < filters.length; i++) {
    json = json.filter(
      (item: any) =>
        item[filters[i].key].toLowerCase() == filters[i].value.toLowerCase()
    );
  }
  return json;
}

export function filterJsonIncludes(
  json: any,
  filters?: { key: string; value: string }[]
) {
  if (!filters) return json;
  for (var i = 0; i < filters.length; i++) {
    json = json.filter((item: any) =>
      item[filters[i].key]
        .toLowerCase()
        .includes(filters[i].value.toLowerCase())
    );
  }
  return json;
}

export enum phases {
  TrainingTemplates,
  WatchActualTraining,
  Exercises,
  Sets,
}

export type Set = {
  reps: number;
  weight: number;
};
export type ExerciseTrain = {
  exercise: Exercise;
  sets: Set[];
};

export type Exercise = {
  id: number;
  name: string;
  type: string;
  last_weight: number;
  icon: string;
};

export type Template = {
  id: number;
  name: string;
};

export type SimpleDate = {
  day: number;
  month: number;
  year: number;
};

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const isMediumScreenOrLarger = (width:number|undefined) => {
  if (!width) return
  return width >= 768;
};

export function getIconsList(): string[] {
  return ["benchpress.png", "deathlift.png", "pullup.png"];
}

export function formatWithZeros(number:number, digits:number) {
  return number.toString().padStart(digits,'0')
}

export const getRandomColor = () => {
  return `#${Math.floor(Math.random()*16777215).toString(16)}`;
};

export const chartColors = [
  "#EBFFFC",
  "#C3FBF2",
  "#8BF4E7",
  "#56E8D5",
  "#38D1BD",
  "#1EB5A1",
  "#0C9987",
  "#036457",
  "#00443B",
];

export function shadeHexColor(color:string, percent:number) {
  var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
  return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}
