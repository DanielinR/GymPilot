import { Set } from "@/libs/utils";

export default function Setbox({ set }: { set: Set }) {
  return (
    <div className="flex flex-col">
      <div className="bg-color-info-back h-14 flex items-center justify-center font-bold text-2xl rounded-md">{set.reps}</div>

      <h3 className="text-color-font bg-color-primary-strong p-2 rounded-md text-center -translate-y-2 text-sm outline-dashed outline-color-secondary">
        {set.weight} kg
      </h3>
    </div>
  );
}
