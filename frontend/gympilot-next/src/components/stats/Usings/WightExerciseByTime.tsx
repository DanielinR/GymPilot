import { useEffect, useState } from "react";
import AreaChart from "../Charts/AreaChart";
import { getJsonFromAPI } from "@/libs/data";

export default function WeightExerciseByTime({
  exercise_id,
}: {
  exercise_id: string;
}) {
  const [width, setWidth] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const updateData = async () => {
      if (exercise_id){
        const response = await getJsonFromAPI("/weightLiftedTimes/" + exercise_id);
        setData(response);
      }else{
        setData([]);
      }
    };
    const actualizarAnchura = () => {
      const objeto = document.getElementById("canvasAreaChart");
      if (objeto) {
        const nuevaAnchura = objeto.offsetWidth;
        setWidth(nuevaAnchura);
      }
    };
    window.addEventListener("resize", actualizarAnchura);
    
    actualizarAnchura();
    updateData();
    return () => {
      window.removeEventListener("resize", actualizarAnchura);
    };
  }, [exercise_id]);

  return (
    <div className="flex w-full" id="canvasAreaChart">
      <AreaChart data={data} height={280} width={width} />
    </div>
  );
}
