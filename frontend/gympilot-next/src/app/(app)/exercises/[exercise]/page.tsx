"use client";

import { Exercise } from "@/libs/utils";
import ExerciseImage from "@/components/ExerciseDetails/ExericiseImage";
import DeleteIcon from "@/components/svg/DeleteIcon";
import GreaterThanIcon from "@/components/svg/GreaterThanIcon";
import { deleteFromAPI, getJsonFromAPI, setJsonFromAPI } from "@/libs/data";
import Link from "next/link";
import { useEffect, useState } from "react";
import ExerciseInfo from "@/components/ExerciseDetails/ExerciseInfo";
import DeleteModal from "@/components/ExerciseDetails/DeleteModal";
import { useRouter } from "next/navigation";
import SelectIcon from "@/components/ExerciseDetails/SelectIcon";

export default function ExercisePage({
  params,
}: {
  params: { exercise: string };
}) {
  const router = useRouter();
  const [exerciseInfo, setExerciseInfo] = useState<Exercise>();
  const [viewDeleteModal, setViewDeleteModal] = useState(false);
  const [viewIconSelection, setViewIconSelection] = useState(false);

  const deleteExercise = (deleting: boolean) => {
    setViewDeleteModal(false);
    if (!deleting) return;

    deleteFromAPI("/exercises/" + params.exercise);
    router.push("/exercises");
  };
  const setType = (type: any) => {
    if (!exerciseInfo || !type) return;
    var newExerciseInfo: Exercise = { ...exerciseInfo };
    newExerciseInfo.type = type.name;
    setExerciseInfo(newExerciseInfo);
    setJsonFromAPI("/exercises/" + params.exercise, {
      name: newExerciseInfo.name,
      type: type.id,
    });
  };
  const setIcon = (icon: string) => {
    setViewIconSelection(false);

    if (!exerciseInfo || !icon) return;
    var newExerciseInfo: Exercise = { ...exerciseInfo };
    newExerciseInfo.icon = icon;
    setExerciseInfo(newExerciseInfo);
    setJsonFromAPI("/exercises/" + params.exercise, {
      name: newExerciseInfo.name,
      icon: newExerciseInfo.icon,
    });
  };

  useEffect(() => {
    async function updateExerciseInfo() {
      const response = await getJsonFromAPI("/exercises/" + params.exercise);
      setExerciseInfo(response);
    }

    updateExerciseInfo();
  }, [params.exercise]);

  return (
    <div className="flex flex-col text-white w-full h-full items-center pt-12 md:pt-24 gap-6 md:gap-14 relative">
      <SelectIcon
        viewModal={viewIconSelection}
        selectAnswer={setIcon}
      ></SelectIcon>
      <DeleteModal
        viewModal={viewDeleteModal}
        selectAnswer={deleteExercise}
      ></DeleteModal>
      <div className="w-full justify-center flex relative">
        <button onClick={() => {router.back()}}
          className="bg-brand-500 hover:bg-brand-700 rounded-full shadow-lg flex items-center justify-center p-3 absolute top-1/2 left-3 md:left-10 -translate-y-1/2"
        >
          <GreaterThanIcon className="md:h-10 md:w-10 h-5 w-5 text-white"></GreaterThanIcon>
        </button>
        <h2 className="tittle text-4xl md:text-5xl lg:text-6xl font-bold h-full text-center relative max-w-[64%] flex justify-center">
          {exerciseInfo?.name.toUpperCase()}
          <button
            onClick={() => {
              setViewDeleteModal(true);
            }}
            className="absolute top-0 -right-2 translate-x-1/2 -translate-y-1/2 bg-error-500 hover:bg-error-700 rounded-full p-1 flex gap-2 items-center shadow-lg"
          >
            <DeleteIcon className="h-8 w-8"></DeleteIcon>
          </button>
        </h2>
      </div>
      <div className="flex flex-1 w-full flex-col items-center h-full relative">
        <ExerciseImage
          setviewIconSelection={setViewIconSelection}
          exerciseInfo={exerciseInfo}
        ></ExerciseImage>
        <div className="flex-1 gap-3 max-w-4xl mb-[-1.5rem] text-center text-white flex flex-col items-center justify-evenly w-[85%] bg-neutral-500 bg-opacity-95 p-3 pt-20 pb-4 rounded-lg -translate-y-14">
          <ExerciseInfo
            exerciseInfo={exerciseInfo}
            setType={setType}
          ></ExerciseInfo>
        </div>
      </div>
    </div>
  );
}
