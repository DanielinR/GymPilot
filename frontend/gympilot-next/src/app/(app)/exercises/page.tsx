"use client";

import List from "@/components/list/List";
import ListElement from "@/components/list/ListElement";

export default function exercisesPage() {

  type ExerciseType = {
    id: number,
    name: string;
  };
  
  return (
    <List<ExerciseType> tittle="Exercise types" url="/exerciseTypes" searchBy="name" render={ListElement}></List>
  );
}
