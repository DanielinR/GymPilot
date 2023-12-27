import { ExerciseTrain } from "@/libs/utils";

export default function ExerciseBox({
  exerciseTrain,
}: {
  exerciseTrain: ExerciseTrain;
}) {
  return (
    <>
      <div className="h-14 w-full bg-neutral-500 bg-opacity-90 px-2 text-center flex items-center justify-center rounded-md overflow-hidden">
        <span className="w-full text-ellipsis overflow-hidden">
        {exerciseTrain.exercise.name.toUpperCase()}
        </span>
      </div>
      <h3 className="w-16 text-color-font bg-neutral-700 p-2 rounded-md text-center -translate-x-2 text-sm outline-dashed outline-brand-500">
        {exerciseTrain.sets.length} sets
      </h3>
    </>
  );
}
