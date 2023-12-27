import { Set } from "@/libs/utils";

export default function Setbox({ set }: { set: Set }) {
  return (
    <div className="flex flex-col text-white">
      <div className="bg-neutral-700 h-20 w-14 flex flex-col items-center justify-center font-bold text-3xl rounded-md leading-3">
        <span>{set.reps}</span>
        <span className="text-xl font-normal">reps</span>
      </div>

      <h3 className="bg-neutral-500b p-2 rounded-md text-center -translate-y-2 text-xl outline-dashed outline-brand-500">
        {set.weight} kg
      </h3>
    </div>
  );
}
