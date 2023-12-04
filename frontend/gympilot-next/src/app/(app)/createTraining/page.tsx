"use client";
import SelectExercise from "@/components/createTrainings/createTrainingPhases/SelectExercise";
import SelectTemplate from "@/components/createTrainings/createTrainingPhases/SelectTemplate";
import CreateSets from "@/components/createTrainings/createTrainingPhases/createSets/CreateSets";
import CreateTrainingTopper from "@/components/createTrainings/topper";
import { phases } from "@/libs/utils";
import { Exercise } from "@/libs/utils";
import CreateTrainingBottom from "@/components/createTrainings/bottom";
import CreateSetsModal from "@/components/createTrainings/createTrainingPhases/createSets/CreateSetsModal";
import { useEffect, useState } from "react";

export default function CreateTrainingPage() {
  const [phase, setPhase] = useState(phases.TrainingTemplates);
  const [template, setTemplate] = useState(-1);
  const [actualExercise, setActualExercise] = useState<{
    id: number;
    name: string;
  }>();
  const [viewModal, setViewModal] = useState(false);
  const [actualWeight, setActualWeight] = useState<number>();
  const [actualReps, setActualReps] = useState<number>();
  const [exercises, setExercises] = useState<Exercise[]>([{name: "Pres banca", sets:[{reps:1, weight: 100}, {reps:1, weight: 100}, {reps:1, weight: 100}, {reps:10, weight: 200}, {reps:10, weight: 200}, {reps:10, weight: 200}]},]);

  const handleSelection = (id: number, name: string) => {
    switch (phase) {
      case phases.TrainingTemplates: {
        setTemplate(id);
        setPhase(phases.Exercises);
        break;
      }
      case phases.Exercises: {
        setActualExercise({ id, name });
        setPhase(phases.Sets);
        break;
      }
      case phases.Sets: {
        setPhase(phases.Exercises);
        break;
      }
    }
  };
  return (
    <div className="h-full w-full overflow-hidden flex flex-col items-center">
      <CreateTrainingTopper phase={phase} />
      <div className="h-full w-full">
        {(() => {
          switch (phase) {
            case phases.TrainingTemplates:
              return SelectTemplate(handleSelection);
            case phases.Exercises:
              return SelectExercise(template, handleSelection);
            case phases.Sets:
              return CreateSets(
                actualExercise ? actualExercise : {id:-1, name: "Pres banca"},
                exercises,
                setExercises,
                setActualReps,
                setViewModal,
                actualReps,
                actualWeight,
              );
            default:
              return null;
          }
        })()}
      </div>
      <CreateTrainingBottom phase={phase} handleConfirm={handleSelection}/>
      <CreateSetsModal viewModal={viewModal} setWeight={setActualWeight} weight={actualWeight} setViewModel={setViewModal}></CreateSetsModal>
    </div>
  );
}
