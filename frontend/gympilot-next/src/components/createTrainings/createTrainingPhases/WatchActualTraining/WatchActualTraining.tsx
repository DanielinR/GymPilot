import ExerciseBox from "./ExerciseBox";
import PlusIcon from "@/components/svg/PlusIcon";
import { useContext } from "react";
import { TrainingContext } from "../../createTrainingContextProvider";
import { phases } from "@/libs/utils";
import { setTraining } from "@/libs/data";

export default function WatchActualTraining() {
  const { template, exercises, setPhase, router } =
    useContext(TrainingContext)!;

  async function finishTraining() {
    if (!template) return;
    await setTraining(exercises, template.id);
    router.push("/");
  }

  return (
    <div className="h-full w-full flex flex-col items-center justify-between">
      <div className="bg-color-info-back h-20 w-48 rounded-md -translate-y-2 p-4 flex items-center justify-center font-bold">
        <span className="text-4xl">{template?.name.toUpperCase()}</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <button
          onClick={() => {
            setPhase(phases.Exercises);
          }}
        >
          <PlusIcon className="text-color-secondary h-24 w-24" />
        </button>
        <div className=" grid grid-cols-[3fr,1fr] gap-y-4 items-center w-full px-16">
          {exercises.map((item) => {
            return <ExerciseBox key={item.exercise.id} exerciseTrain={item} />;
          })}
        </div>
      </div>
      <button
        onClick={finishTraining}
        className="bg-red-700 h-14 w-44 text-center flex items-center justify-center font-bold text-xl text-color-font rounded-full p-2 hover:bg-color-secondary-dark mb-16"
      >
        Finish training
      </button>
    </div>
  );
}

type Exercise = {
  id: number;
  name: string;
};
