"use client";

import { Exercise } from "@/libs/utils";
import List from "@/components/list/List";
import ExerciseElement from "@/components/list/ExerciseElement"; "@/components/list/ExerciseElement";

export default function ExercisesPage() {

  return (
    <div className="p-5 w-full h-full">
      <List<Exercise> tittle="Exercises" url="/exercises" searchBy="name" render={ExerciseElement}></List>
    </div>
  );
}
