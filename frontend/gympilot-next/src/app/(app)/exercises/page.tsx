"use client";

import { Exercise } from "@/libs/utils";
import List from "@/components/list/List";
import ExerciseElement from "@/components/list/ExerciseElement"; "@/components/list/ExerciseElement";
import { useRouter } from "next/navigation";

export default function ExercisesPage() {
  const router = useRouter()
  const createExercise = () => {
    router.push("/exercises/create")
  }

  return (
    <div className="p-5 w-full h-full">
      <List<Exercise> tittle="Exercises" url="/exercises" createFunction={createExercise} searchBy="name" render={ExerciseElement} filters={["template", "type"]}></List>
    </div>
  );
}
