import { useEffect, useState } from "react";
import AreaChart from "../Charts/AreaChart";

export default function WeightExerciseByTime({
  exercise,
}: {
  exercise: string;
}) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const actualizarAnchura = () => {
      const objeto = document.getElementById("canvasAreaChart");
      if (objeto) {
        const nuevaAnchura = objeto.offsetWidth;
        setWidth(nuevaAnchura);
      }
    };
    window.addEventListener("resize", actualizarAnchura);
    actualizarAnchura();
    return () => {
      window.removeEventListener("resize", actualizarAnchura);
    };
  }, []);

  const data = [
    { date: new Date("2007-04-24T07:00:00.000Z"), value: 87.5 },
    { date: new Date("2008-02-15T07:00:00.000Z"), value: 91.8 },
    { date: new Date("2009-09-02T07:00:00.000Z"), value: 85.25 },
    { date: new Date("2010-07-18T07:00:00.000Z"), value: 88.9 },
    { date: new Date("2011-05-30T07:00:00.000Z"), value: 92.15 },
    { date: new Date("2012-11-12T07:00:00.000Z"), value: 89.75 },
    { date: new Date("2013-08-05T07:00:00.000Z"), value: 87.2 },
    { date: new Date("2014-04-20T07:00:00.000Z"), value: 90.4 },
    { date: new Date("2015-01-03T07:00:00.000Z"), value: 86.7 },
    { date: new Date("2016-09-18T07:00:00.000Z"), value: 91.2 },
    { date: new Date("2017-06-01T07:00:00.000Z"), value: 88.6 },
    { date: new Date("2018-03-25T07:00:00.000Z"), value: 89.9 },
    { date: new Date("2019-11-08T07:00:00.000Z"), value: 86.45 },
    { date: new Date("2020-08-21T07:00:00.000Z"), value: 92.3 },
    { date: new Date("2021-04-04T07:00:00.000Z"), value: 87.8 },
    { date: new Date("2022-01-17T07:00:00.000Z"), value: 90.6 },
    { date: new Date("2022-12-01T07:00:00.000Z"), value: 88.2 },
    { date: new Date("2023-08-15T07:00:00.000Z"), value: 91.7 },
  ];
  return (
    <div className="flex w-full" id="canvasAreaChart">
      <AreaChart data={data} height={280} width={width} />
    </div>
  );
}
