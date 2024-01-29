"use client";

import { Exercise } from "@/libs/utils";
import ExerciseImage from "@/components/ExerciseDetails/ExericiseImage";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MuscleIcon from "@/components/svg/MuscleIcon";
import SelectIcon from "@/components/ExerciseDetails/SelectIcon";
import NameModal from "@/components/ExerciseDetails/Create/NameModal";
import { createFromAPI, getIdByName } from "@/libs/data";
import DropDownList from "@/components/general/DropDownList";

export default function CrateExercisePage() {
  const router = useRouter();
  const [exerciseInfo, setExerciseInfo] = useState<Exercise>({
    id: -1,
    name: "",
    type: "",
    last_weight: -1,
    icon: "default.png",
  });
  const [viewNameModal, setViewNameModal] = useState(true);
  const [viewIconSelection, setViewIconSelection] = useState(false);
  const [typeAdviseView, setTypeAdviseView] = useState(false);

  const createExercise = async () => {
    if (exerciseInfo.type == "") {setTypeAdviseView(true); return}
    try {
      const {id,last_weight, ...exercise} = exerciseInfo
      exercise.type = await getIdByName("/exerciseTypes", exercise.type)
      createFromAPI("/exercises", exercise)
      router.push("/exercises")
    } catch (error) {
    }
  };
  const setIcon = (icon: string) => {
    setViewIconSelection(false);
    if (!exerciseInfo || !icon) return;
    var newExerciseInfo: Exercise = { ...exerciseInfo };
    newExerciseInfo.icon = icon;
    setExerciseInfo(newExerciseInfo);
  };
  const setName = (name: string) => {
    setViewNameModal(false);
    if (!exerciseInfo || !name) return;
    var newExerciseInfo: Exercise = { ...exerciseInfo };
    newExerciseInfo.name = name;
    setExerciseInfo(newExerciseInfo);
  };
  const setType = (type: any) => {
    if (!exerciseInfo || !type) return;
    var newExerciseInfo: Exercise = { ...exerciseInfo };
    newExerciseInfo.type = type.name;
    setExerciseInfo(newExerciseInfo);
  };
  const cancelCreation = () => {
    router.push("/exercises");
  };

  return (
    <div className="flex flex-col text-white w-full h-full items-center pt-6 md:pt-24 gap-6 md:gap-14 relative">
      <SelectIcon
        viewModal={viewIconSelection}
        selectAnswer={setIcon}
      ></SelectIcon>
      <NameModal viewModal={viewNameModal} setName={setName}></NameModal>
      <div className="w-full justify-center flex relative">
        <h2 className="tittle text-4xl md:text-5xl lg:text-6xl font-bold h-full text-center relative max-w-[64%] flex justify-center">
          {exerciseInfo?.name.toUpperCase()}
        </h2>
      </div>
      <div className="flex flex-1 w-full flex-col items-center h-full relative">
        <ExerciseImage
          setviewIconSelection={setViewIconSelection}
          exerciseInfo={exerciseInfo}
        ></ExerciseImage>
        <div className="text-3xl flex-1 gap-3 max-w-4xl mb-[-1.5rem] text-center text-white flex flex-col items-center justify-center w-[85%] bg-neutral-500 bg-opacity-95 p-3 pt-20 pb-4 rounded-lg -translate-y-14">
          <div className="flex gap-2 items-center">
            <MuscleIcon className="h-7 w-7"></MuscleIcon>
            <span className="font-semibold">Type:</span>
          </div>
          <div className={typeAdviseView ? "border-error-500 border rounded-lg" : ""}>
            <DropDownList
              selectedItem={exerciseInfo?.type || "Select one"}
              listName="type"
              select={setType}
            ></DropDownList>
          </div>
          {typeAdviseView && <span className="text-base text-error-500">
            type needed to create an exercise
          </span>}
        </div>
        <div className="flex items-center gap-4 pb-5 justify-evenly w-full">
          <button
            onClick={() => {
              cancelCreation();
            }}
            className="px-10 py-5 bg-error-500 hover:bg-error-700 rounded-lg text-error-100 shadowText text-2xl shadow-xl"
          >
            CANCEL
          </button>
          <button
            onClick={() => {
              createExercise();
            }}
            className="px-10 py-5 bg-brand-500 hover:bg-brand-700 rounded-lg text-white shadowText text-2xl shadow-xl"
          >
            CREATE
          </button>
        </div>
      </div>
    </div>
  );
}
