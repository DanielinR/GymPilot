import { useContext } from "react";
import { TrainingContext } from "../../createTrainingContextProvider";
import { phases } from "@/libs/utils";
import TickIcon from "@/components/svg/TickIcon";
import Timer from "./Timer";

export default function CreateSetsButtons() {
  const { setPhase } = useContext(TrainingContext)!;

  return (
    <div className="relative flex justify-center w-full pr-3 text-white">
      <div className="">
        <Timer />
      </div>
      <button className="absolute right-3 bottom-3"
        onClick={() => {
          setPhase(phases.WatchActualTraining);
        }}
      >
        <TickIcon className="h-16 w-16 bg-brand-500 p-2 rounded-full text-color-font" />
      </button>
    </div>
  );
}
