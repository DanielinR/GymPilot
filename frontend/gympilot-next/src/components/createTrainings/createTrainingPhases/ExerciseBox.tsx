import { ExerciseTrain } from "@/libs/utils";

export default function ExerciseBox({ exerciseTrain }: { exerciseTrain: ExerciseTrain }) {
  return (
    <div className="flex flex-col">
      <div className="bg-color-info-back h-9 text-sm md:text-base md:h-14 px-2 text-center flex items-center justify-center rounded-md">{exerciseTrain.exercise.name.toUpperCase()}</div>

      <h3 className="text-color-font bg-color-primary-strong p-2 rounded-md text-center -translate-y-2 text-sm outline-dashed outline-color-secondary">
        {exerciseTrain.sets.length} sets
      </h3>
    </div>
  );
}
