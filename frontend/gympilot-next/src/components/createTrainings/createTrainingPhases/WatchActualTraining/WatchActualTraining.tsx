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
    <div className="h-full w-full flex flex-col items-center justify-between text-white pt-4">
        <h1 className="tittle text-6xl">{template?.name.toUpperCase()}</h1>
      <div className="flex flex-col items-center justify-center gap-5">
        <button className="bg-brand-500 rounded-full"
          onClick={() => {
            setPhase(phases.Exercises);
          }}
        >
          <PlusIcon className="h-16 w-16" />
        </button>
        <div className=" grid grid-cols-[3fr,1fr] gap-y-4 items-center w-full px-16">
          {exercises.map((item) => {
            return <ExerciseBox key={item.exercise.id} exerciseTrain={item} />;
          })}
        </div>
      </div>
      <button
        onClick={finishTraining}
        className="bg-error-500 h-14 shadowText w-44 text-center flex items-center justify-center font-bold text-xl rounded-full p-2 hover:bg-error-700 mb-16"
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
