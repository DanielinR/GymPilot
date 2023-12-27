import List from "@/components/list/List";
import ExerciseElement from "@/components/list/ExerciseElement";
import { useContext } from "react";
import { TrainingContext } from "../createTrainingContextProvider";
import { Exercise, phases } from "@/libs/utils";
import BackButton from "./BackButton";

export default function SelectExercise() {
  const { template, setActualExercise, setPhase, exercises } =
    useContext(TrainingContext)!;

  const handleSelection = ({ id, name }: { id: number; name: string }) => {
    setActualExercise({ id: id, name: name });
    setPhase(phases.Sets);
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-between">
      <List<Exercise>
        tittle={"What exercise do you want to do now?"}
        tittleSize="text-4xl"
        searchBy="name"
        url={"/trainingTemplates/" + template?.id}
        jsonParam="exercises"
        render={ExerciseElement}
        functionButtons={handleSelection}
        filters={["template", "type"]}
      ></List>
      {(!exercises || exercises.length == 0) && (
        <BackButton phaseToSet={phases.TrainingTemplates} />
      )}
      {exercises && exercises.length !== 0 && (
        <BackButton phaseToSet={phases.WatchActualTraining} />
      )}
    </div>
  );
}
