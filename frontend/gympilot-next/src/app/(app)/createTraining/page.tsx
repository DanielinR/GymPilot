"use client";
import SelectExercise from "@/components/createTrainings/createTrainingPhases/SelectExercise";
import SelectTemplate from "@/components/createTrainings/createTrainingPhases/SelectTemplate";
import CreateSets from "@/components/createTrainings/createTrainingPhases/createSets/CreateSets";
import CreateTrainingTopper from "@/components/createTrainings/topper";
import { phases } from "@/libs/utils";
import { Exercise, ExerciseTrain } from "@/libs/utils";
import CreateTrainingBottom from "@/components/createTrainings/bottom";
import CreateSetsModal from "@/components/createTrainings/createTrainingPhases/createSets/CreateSetsModal";
import { useEffect, useState } from "react";
import { getWeightFromExercise, setTraining } from "@/libs/data";
import { useRouter } from 'next/navigation';

export default function CreateTrainingPage() {
  const router = useRouter();
  const [phase, setPhase] = useState(phases.TrainingTemplates);
  const [template, setTemplate] = useState(-1);
  const [actualExercise, setActualExercise] = useState<Exercise>();
  const [viewModal, setViewModal] = useState(false);
  const [actualWeight, setActualWeight] = useState<number>();
  const [actualReps, setActualReps] = useState<number>();
  const [exercises, setExercises] = useState<ExerciseTrain[]>([]);

  useEffect(() => {
    async function updateWeight() {
      if (!actualExercise){return}
      const newWeight = await getWeightFromExercise(actualExercise?.id);
      setActualWeight(newWeight);
      if (newWeight == null) {
        setViewModal(true)
      }
    }

    updateWeight();
  }, [actualExercise]);

  const handleConfirm = async (id: number, name: string) => {
    switch (phase) {
      case phases.Exercises: {
        await setTraining(exercises, template)
        // router.push('/');
        break;
      }
      case phases.Sets: {
        setPhase(phases.Exercises);
        break;
      }
    }
  }
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
                actualExercise ? actualExercise : { id: -1, name: "" },
                exercises,
                setExercises,
                setActualReps,
                setViewModal,
                actualReps,
                actualWeight
              );
            default:
              return null;
          }
        })()}
      </div>
      <CreateTrainingBottom phase={phase} handleConfirm={handleConfirm} />
      <CreateSetsModal
        viewModal={viewModal}
        setWeight={setActualWeight}
        weight={actualWeight}
        setViewModel={setViewModal}
      ></CreateSetsModal>
    </div>
  );
}
