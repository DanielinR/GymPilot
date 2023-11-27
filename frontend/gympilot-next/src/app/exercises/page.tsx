"use client";

import List from "@/components/list/List";
import ListElement from "@/components/list/ListElement";
import { type } from "os";

export default function exercisesPage() {

  type Exercise = {
    id: number,
    name: string;
  };

  return (
    <List<Exercise> tittle="Exercises" url="/exerciseTypes" render={ListElement}></List>
  );
}
