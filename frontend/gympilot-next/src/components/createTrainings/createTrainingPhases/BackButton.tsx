import { useContext } from "react";
import { TrainingContext } from "../createTrainingContextProvider";
import GreaterThanIcon from "@/components/svg/GreaterThanIcon";

export default function BackButton({ phaseToSet, classname = "" }: { phaseToSet: number, classname?: string }) {
  const { setPhase } = useContext(TrainingContext)!;

  return (
    <button className={classname + " bg-brand-500 hover:bg-brand-700 p-3 rounded-full shadow-lg"}
      onClick={() => {
        setPhase(phaseToSet);
      }}
    >
      <GreaterThanIcon className="h-5 w-5 text-white" />
    </button>
  );
}
