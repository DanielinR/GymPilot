"use client";

import ExerciseBySets from "@/components/stats/Usings/ExerciseBySets";
import ExerciseTypeBySets from "@/components/stats/Usings/ExerciseTypeBySets";
import TrainsByRoutine from "@/components/stats/Usings/TrainsByRoutine";

export default function StatsPage() {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 p-5 w-full h-full text-white overflow-auto`}
      style={{ gridAutoRows: "min-content" }}
    >
      <TrainsByRoutine />
      <ExerciseBySets/>
      <ExerciseTypeBySets/>
    </div>
  );
}
