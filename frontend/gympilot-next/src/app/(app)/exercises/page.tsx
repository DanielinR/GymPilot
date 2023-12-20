"use client";

import List from "@/components/list/List";
import ExerciseElement from "@/components/list/ExerciseElement"; "@/components/list/ExerciseElement";

export default function ExercisesPage() {

  type ExerciseType = {
    id: number,
    name: string;
    type: number;
    last_weight: number;
  };
  
  return (
    <div className="m-5">
      <List<ExerciseType> listHeight={810} tittle="Exercises" url="/exercises" searchBy="name" render={ExerciseElement}></List>
    </div>
  );
}
