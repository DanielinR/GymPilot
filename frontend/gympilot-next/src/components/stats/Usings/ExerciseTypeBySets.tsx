import RadarChart from "../Charts/Radarchart";

export default function ExerciseTypeBySets() {
  const data = [
    { label: "pecho", value: 30 },
    { label: "espalda", value: 10 },
    { label: "pierna", value: 2 },
    { label: "hombro", value: 30 },
    { label: "hombro", value: 30 },
  ];

  return (
    <div className="relative flex flex-col gap-1 items-center bg-neutral-500 bg-opacity-90 pt-7 p-3 rounded-lg">
      <h2 className="text-3xl text-center shadowText px-3">
        Exercise types by number of sets
      </h2>
      <RadarChart data={data} height={280} width={280} />
    </div>
  );
}
