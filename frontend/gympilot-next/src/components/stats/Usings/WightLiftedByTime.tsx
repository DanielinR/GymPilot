import { useEffect, useState } from "react";
import WeightExerciseByTime from "./WightExerciseByTime";
import { Exercise } from "@/libs/utils";
import { getJsonFromAPI } from "@/libs/data";

export default function WeightLifedByTime() {
  const [selectedExercise_id, setSelectedExercise_id] = useState("0");
  const [exercises, setExercises] = useState<Exercise[]>([])

  useEffect(()=>{
    async function updateExercises(){
      const response = await getJsonFromAPI("/exercises")
      setExercises(response)
    } 
    updateExercises()
  },[])

  function selectExercise(exercise_id: string) {
    setSelectedExercise_id(exercise_id);
  }

  return (
    <div className="relative flex flex-col gap-5 items-center bg-neutral-500 bg-opacity-80 py-7 px-2 rounded-lg">
      <h2 className="text-3xl text-center shadowText px-3">Weight lifted</h2>
      <div className="flex flex-col items-center w-full gap-2 px-5">
        <select className="w-full bg-neutral-700 p-2 rounded-md" placeholder="search exercise" onChange={(event)=>{selectExercise(event.currentTarget.value)}}>
        <option value="">-- Select exercise --</option>
          {exercises.map((item)=>{
            return(
              <option key={item.id} value={item.id}>{item.name}</option>
            );})}
        </select>
        <WeightExerciseByTime exercise_id={selectedExercise_id} />
      </div>
    </div>
  );
}
