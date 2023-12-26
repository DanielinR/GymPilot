import MuscleIcon from "@/components/svg/MuscleIcon";
import StatsIcon from "@/components/svg/StatsIcon";
import DumbellIcon from "@/components/svg/DumbellIcon";
import { Exercise } from "@/libs/utils";
import { useState } from "react";
import DisplayIcon from "../svg/DisplayIcon";
import DropDownItems from "../list/SearchBar/DropdownItems";

export default function ExerciseInfo({
  exerciseInfo,
  setType,
}: {
  exerciseInfo: Exercise | undefined;
  setType: (type: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-6 text-2xl">
        <div className="flex flex-col md:flex-row gap-1 md:gap-3 items-center">
          <div className="flex gap-2 items-center">
            <MuscleIcon className="h-7 w-7"></MuscleIcon>
            <span className="font-semibold">Type:</span>
          </div>
          <div className="relative">
            {isOpen && (
              <DropDownItems
                filter="type"
                selectFunction={(selection: string) => {
                  setIsOpen(false);
                  if (!selection) return;
                  setType(selection);
                }}
              ></DropDownItems>
            )}
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="flex items-center bg-neutral-600 rounded-lg pl-2"
            >
              <span className="font-light pr-1">{exerciseInfo?.type}</span>
              <div
                className={`flex-grow pl-1 pr-2 py-1 hover:bg-neutral-700 rounded-r-lg h-full`}
              >
                <DisplayIcon className="w-5 h-5"></DisplayIcon>
              </div>
            </button>
          </div>
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
