import { useState } from "react";
import WeightExerciseByTime from "./WightExerciseByTime";
import SearchBar from "@/components/list/SearchBar/SearchBar";

export default function WeightLifedByTime() {
  const [exercise, setExercise] = useState("");

  return (
    <div className="relative flex flex-col gap-5 items-center bg-neutral-500 bg-opacity-80 py-7 px-2 rounded-lg">
      <h2 className="text-3xl text-center shadowText px-3">Weight lifted</h2>
      <div className="flex flex-col items-center w-full gap-2 px-5">
        <SearchBar placeholder="search exercise"></SearchBar>
        <WeightExerciseByTime exercise={exercise} />
      </div>
    </div>
  );
}
