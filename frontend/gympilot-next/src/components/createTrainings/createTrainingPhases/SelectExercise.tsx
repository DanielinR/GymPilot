import List from "@/components/list/List";
import ExerciseElement from "@/components/list/ExerciseElement";
import { useContext } from "react";
import { TrainingContext } from "../createTrainingContextProvider";
import { Exercise, phases } from "@/libs/utils";
import BackButton from "./BackButton";

export default function SelectExercise() {
  const { template, setActualExercise, setPhase, exercises } =
    useContext(TrainingContext)!;

  const handleSelection = (exercise: Exercise) => {
    setActualExercise(exercise);
    setPhase(phases.Sets);
  };

  return (
    <div className="h-full w-full flex flex-col gap-5 items-center justify-between p-5 pt-0 relative">
      {<BackButton phaseToSet={exercises && exercises.length !== 0 ? phases.WatchActualTraining : phases.TrainingTemplates} classname="absolute left-8 top-6"/>}
      <List<Exercise>
        tittle={"Next exercise"}
        searchBy="name"
        url={"/exercises"}
        render={ExerciseElement}
        functionButtons={handleSelection}
        filters={["routine", "type"]}
      ></List>
    </div>
  );
}
