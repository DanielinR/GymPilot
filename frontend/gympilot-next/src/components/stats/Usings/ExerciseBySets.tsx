import { useEffect, useState } from "react";
import MyWordcloud from "../Charts/MyWordcloud";
import { getJsonFromAPI } from "@/libs/data";

export default function ExerciseBySets() {
  const [data, setData] = useState([]);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateData = async () => {
      const response = await getJsonFromAPI("/countExerciseSets")
      const newData = response.map((item:any) => ({ text: item.label, value: item.value }));//the wordcloud datatype required is([text,value],...)
      setData(newData)
    };

    const actualizarAnchura = () => {
      const objeto = document.getElementById("canvasAreaChart");
      if (objeto) {
        const nuevaAnchura = objeto.offsetWidth;
        setWidth(nuevaAnchura);
      }
    };
    window.addEventListener("resize", actualizarAnchura);

    updateData();
    actualizarAnchura();
    return () => {
      window.removeEventListener("resize", actualizarAnchura);
    };
  }, []);

  return (
    <div className="relative flex flex-col gap-0 items-center bg-neutral-500 bg-opacity-80 p-7 pb-0 rounded-lg">
      <h2 className="text-3xl text-center shadowText">
        Most popular exercises
      </h2>
      <MyWordcloud data={data} height={280} width={width} />
    </div>
  );
}
