import MuscleIcon from "@/components/svg/MuscleIcon";
import StatsIcon from "@/components/svg/StatsIcon";
import DumbellIcon from "@/components/svg/DumbellIcon";
import { Exercise } from "@/libs/utils";
import DropDownList from "./DropDownList";

export default function ExerciseInfo({
  exerciseInfo,
  setType,
}: {
  exerciseInfo: Exercise | undefined;
  setType: (type: any) => void;
}) {

  return (
    <>
      <div className="flex flex-col gap-6 text-2xl">
        <div className="flex flex-col md:flex-row gap-1 md:gap-3 items-center">
          <div className="flex gap-2 items-center">
            <MuscleIcon className="h-7 w-7"></MuscleIcon>
            <span className="font-semibold">Type:</span>
          </div>
          <DropDownList listName="type" selectedItem={exerciseInfo?.type} select={setType}></DropDownList>
        </div>
        <div className="flex flex-col md:flex-row gap-1 md:gap-3 items-center">
          <div className="flex gap-2 items-center">
            <DumbellIcon className="h-7 w-7"></DumbellIcon>
            <span className="font-semibold">Last weight:</span>
          </div>
          <span className="font-light">{exerciseInfo?.last_weight ? exerciseInfo.last_weight + "kg" : "-"}</span>
        </div>
      </div>
      <div className="flex items-center">
        <button className="bg-brand-500 hover:bg-brand-700 rounded-lg px-5 py-2 flex gap-2 items-center shadow-lg">
          <StatsIcon className="h-10 w-10"></StatsIcon>
          <span className="font-semibold text-3xl">Stats</span>
        </button>
      </div>
    </>
  );
}
