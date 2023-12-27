import { useContext } from "react";
import { TrainingContext } from "../createTrainingContextProvider";
import BackIcon from "@/components/svg/BackIcon";

export default function BackButton({phaseToSet}:{phaseToSet:number}) {
  const { setPhase } = useContext(TrainingContext)!;

  return (
    <div className="flex justify-start w-full pb-3 pr-3">
      <button
        onClick={() => {
          setPhase(phaseToSet);
        }}
      >
        <BackIcon className="h-16 w-16 bg-brand-500 p-3 rounded-full text-white" />
      </button>
    </div>
  );
}
