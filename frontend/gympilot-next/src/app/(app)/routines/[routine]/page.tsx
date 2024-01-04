"use client";

import DeleteModal from "@/components/ExerciseDetails/DeleteModal";
import ExerciseElement from "@/components/list/ExerciseElement";
import List from "@/components/list/List";
import DeleteIcon from "@/components/svg/DeleteIcon";
import GreaterThanIcon from "@/components/svg/GreaterThanIcon";
import PlusIcon from "@/components/svg/PlusIcon";
import XIcon from "@/components/svg/XIcon";
import { deleteFromAPI, getJsonFromAPI, setJsonFromAPI } from "@/libs/data";
import { Exercise, Template } from "@/libs/utils";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function RoutinePage({
  params,
}: {
  params: { routine: string };
}) {
  const router = useRouter();
  const [exercises, setExercises] = useState<Exercise[]>();
  const [name, setName] = useState("");
  const [viewDeleteModal, setViewDeleteModal] = useState(false);
  const [viewSelectExercise, setViewSelectExercise] = useState(false);
  const deleteTemplate = (deleting: boolean) => {
    setViewDeleteModal(false);
    if (!deleting) return;

    deleteFromAPI("/trainingTemplates/" + params.routine);
    router.push("/routines");
  };
  const deleteExercise = async (exercise: Exercise) => {
    if (!exercise) return;
    await setJsonFromAPI(
      "/trainingTemplates/" + params.routine + "/deleteExercise",
      exercise
    );
    updateExercises();
  };
  const addExercise = async (exercise: Exercise) => {
    setViewSelectExercise(false);
    if (!exercise) return;
    await setJsonFromAPI(
      "/trainingTemplates/" + params.routine + "/addExercise",
      exercise
    );
    updateExercises();
  };
  const updateExercises = useCallback(async () => {
    const response = await getJsonFromAPI(
      "/trainingTemplates/" + params.routine,
      "exercises"
    );
    setExercises(response);
  },[params.routine])
  useEffect(() => {
    async function updateName() {
      const response = await getJsonFromAPI(
        "/trainingTemplates/" + params.routine,
        "name"
      );
      setName(response);
    }
    updateExercises();
    updateName();
  }, [params.routine,updateExercises]);

  return (
    <div className="h-full w-full flex items-center justify-center overflow-hidden flex-col text-white relative pt-6 md:pt-24 gap-8 md:gap-14">
      <DeleteModal
        viewModal={viewDeleteModal}
        selectAnswer={deleteTemplate}
      ></DeleteModal>
      {viewSelectExercise && (
        <div
          className={`absolute top-0 z-50 bg-neutral-500 bg-opacity-80 p-5 flex items-center w-[90%] h-[95%] rounded-lg`}
        >
          <List<Exercise>
            tittle={"Add exercise"}
            tittleSize="text-4xl"
            searchBy="name"
            url={"/exercises"}
            render={ExerciseElement}
            functionButtons={addExercise}
            filters={["template", "type"]}
          ></List>
          <button
            onClick={() => {
              setViewSelectExercise(false);
            }}
          >
            <XIcon className="h-5 w-5 absolute top-3 right-3"></XIcon>
          </button>
        </div>
      )}
      <div className="w-full justify-center flex relative">
        <button
          onClick={() => {
            router.back();
          }}
          className="bg-brand-500 hover:bg-brand-700 rounded-full shadow-lg flex items-center justify-center p-3 absolute top-1/2 left-3 md:left-10 -translate-y-1/2"
        >
          <GreaterThanIcon className="md:h-10 md:w-10 h-5 w-5 text-white"></GreaterThanIcon>
        </button>
        <h2 className="tittle text-4xl md:text-5xl lg:text-6xl font-bold h-full text-center relative max-w-[64%] flex justify-center">
          {name.toUpperCase()}
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
      <div className="flex flex-col w-full h-full gap-3 mb-10 items-center overflow-hidden">
        <button
          onClick={() => {
            setViewSelectExercise(true);
          }}
          className="p-3 bg-brand-500 hover:bg-brand-700 rounded-full shadow-lg"
        >
          <PlusIcon className="h-10 w-10"></PlusIcon>
        </button>
        <div className="flex flex-1 w-[75%] flex-col items-center h-full relative gap-5 overflow-auto pt- p-7 mb-7">
          {exercises?.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-neutral-500 bg-opacity-90 p-5 w-full rounded-lg flex items-center justify-center text-xl font-bold relative text-center"
              >
                {item.name}
                <button
                  onClick={() => {
                    deleteExercise(item);
                  }}
                  className="absolute top-0 -right-2 translate-x-1/2 -translate-y-1/2 bg-error-500 hover:bg-error-700 rounded-full p-1 flex gap-2 items-center shadow-lg"
                >
                  <DeleteIcon className="h-6 w-6"></DeleteIcon>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
