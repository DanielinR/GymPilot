import ArrowIcon from "@/components/svg/ArrowIcon";

export default function DayInfo() {
  return (
    <div className="bg-neutral-500 rounded-lg bg-opacity-90 flex items-center justify-center gap-10 text-white">
      <div className="flex flex-col items-center justify-center">
        <span className="flex items-center justify-center text-2xl md:text-3xl font-bold rounded-tl-xl w-full">
          December 11h
        </span>
        <span className="flex items-center justify-center text-xl md:text-2xl">Push</span>
      </div>
      <button className="bg-brand-500 hover:bg-brand-700 rounded-full flex items-center justify-center shadow-2xl p-3">
        <ArrowIcon className="h-10 w-10 md:w-14 md:h-14 text-white"></ArrowIcon>
      </button>
    </div>
  );
}
