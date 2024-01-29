import { useEffect, useState } from "react";
import RadarChart from "../Charts/Radarchart";
import { getJsonFromAPI } from "@/libs/data";

export default function ExerciseTypeBySets() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const updateData = async () => {
      const response = await getJsonFromAPI("/countExerciseTypeSets")
      setData(response)
    };

    updateData();
  }, []);

  return (
    <div className="relative flex flex-col gap-1 items-center bg-neutral-500 bg-opacity-80 pt-7 p-3 rounded-lg">
      <h2 className="text-3xl text-center shadowText px-3">
        Exercise types by number of sets
      </h2>
      <RadarChart data={data} height={280} width={280} />
    </div>
  );
}
