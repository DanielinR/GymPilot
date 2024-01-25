import PieChart from "../Charts/PieChart";

export default function ExerciseBySets() {
  const data = [
    { label: "push", value: 30 },
    { label: "pull", value: 45 },
    { label: "leg", value: 10 },
  ];

  return (
    <div className="relative flex flex-col gap-5 items-center bg-neutral-500 bg-opacity-90 p-7 rounded-lg">
      <h2 className="text-3xl text-center shadowText">Workouts by routine</h2>
      <PieChart data={data} height={280} width={280} />
    </div>
  );
}
