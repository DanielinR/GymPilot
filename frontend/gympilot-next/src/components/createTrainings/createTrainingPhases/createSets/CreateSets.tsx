import { ExerciseTrain, Set, Exercise } from "@/libs/utils";
import SelectNumber from "../../SelectNumber";
import Setbox from "./SetBox";
import CreateSetsTittle from "./CreateSetsTittle";
import { useContext } from "react";
import { TrainingContext } from "../../createTrainingContextProvider";
import CreateSetTopper from "./CreateSetTopper";
import CreateSetsButtons from "./CreateSetsButtons";

export default function CreateSets() {
  const {
    actualReps,
    actualWeight,
    exercises,
    actualExercise,
    setExercises,
    setActualReps,
  } = useContext(TrainingContext)!;

  function createSet() {
    if (!actualReps || !actualWeight || !actualExercise) return;

    const updatedExercises = [...exercises];
    const newSet: Set = { reps: actualReps, weight: actualWeight };

    const exerciseIndex = updatedExercises.findIndex(
      (exerciseTrain) => exerciseTrain.exercise.name === actualExercise.name
    );
    if (exerciseIndex !== -1) {
      const updatedSets = [...updatedExercises[exerciseIndex].sets, newSet];
      updatedExercises[exerciseIndex] = {
        ...updatedExercises[exerciseIndex],
        sets: updatedSets,
      };
    } else {
      const newExercise: ExerciseTrain = {
        exercise: {
          id: actualExercise.id,
          name: actualExercise.name,
        },
        sets: [newSet],
      };
      updatedExercises.push(newExercise);
    }

    setExercises(updatedExercises);
    setActualReps(undefined);
  }

  const currentExerciseSets = exercises.find(
    (exerciseTrain) => exerciseTrain.exercise.name === actualExercise?.name
  )?.sets;
  return (
    <div className="flex flex-col items-center justify-between h-full">
      <CreateSetTopper />
      <div className="h-full w-full flex flex-col items-center justify-evenly p-7">
        <CreateSetsTittle />
        <div className="flex flex-col items-center gap-5 w-full">
          <SelectNumber
            setNumber={setActualReps}
            number={actualReps ? actualReps.toString() : ""}
            selectionText="reps"
            handleSelection={createSet}
          />
          <div className="flex justify-center items-center gap-4 w-fit bg-color-primary-strong p-4 rounded-md flex-wrap max-h-48 max-w-lg overflow-auto">
            {currentExerciseSets && currentExerciseSets.length > 0 ? (
              currentExerciseSets.map((item, index) => {
                return <Setbox key={index} set={item}></Setbox>;
              })
            ) : (
              <div className="w-14 h-20" />
            )}
          </div>
        </div>
      </div>
      <CreateSetsButtons />
    </div>
  );
}
