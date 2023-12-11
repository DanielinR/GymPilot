import { useContext } from "react";
import { TrainingContext } from "../../createTrainingContextProvider";
import { phases } from "@/libs/utils";
import TickIcon from "@/components/svg/TickIcon";

export default function CreateSetsButtons() {
  const { setPhase } = useContext(TrainingContext)!;

  return (
    <div className="flex justify-end w-full pb-3 pr-3">
      <button
        onClick={() => {
          setPhase(phases.WatchActualTraining);
        }}
      >
        <TickIcon className="h-16 w-16 bg-color-secondary p-2 rounded-full text-color-font" />
      </button>
    </div>
  );
}
