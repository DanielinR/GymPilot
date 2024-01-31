import { useEffect, useState } from "react";
import PieChart from "../Charts/PieChart";
import { getJsonFromAPI } from "@/libs/data";

export default function ExerciseBySets() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const updateData = async () => {
      const response = await getJsonFromAPI("/countExerciseTemplates");
      setData(response);
    };

    updateData();
  }, []);

  return (
    <div className="relative flex flex-col gap-5 items-center bg-neutral-500 bg-opacity-80 p-7 rounded-lg">
      <h2 className="text-3xl text-center shadowText">Workouts by routine</h2>
      <div className="h-full flex items-center justify-center">
        <PieChart data={data} height={280} width={280} />
      </div>
    </div>
  );
}
