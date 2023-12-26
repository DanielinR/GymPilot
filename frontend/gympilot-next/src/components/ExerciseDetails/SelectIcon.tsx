import { getIconsList } from "@/libs/utils";
import Image from "next/image";

export default function SelectIcon({
  viewModal,
  selectAnswer,
}: {
  viewModal: boolean;
  selectAnswer: (answer: string) => void;
}) {
  const icons = getIconsList();

  return (
    <div
      className={`absolute z-50 bg-neutral-700 bg-opacity-95 p-7 flex flex-col items-center gap-6 -mt-5 w-[90%] h-[90%] rounded-xl shadow-xl ${
        viewModal ? "" : "hidden"
      }`}
    >
      <h2 className="shadowText text-color-font text-3xl text-center font-bold">
        Select new Icon
      </h2>
      <div className="grid gap-5 grid-cols-2 max-h-full overflow-auto p-3">
        {icons.map((item) => {
          return (
            <button
            key={item}
              onClick={() => {
                selectAnswer(item);
              }}
              className=""
            >
              <Image
                alt="icon"
                src={"/exercisesLogos/" + item}
                width={120}
                height={120}
                className="h-30 w-auto rounded-full border-4 shadow-xl border-brand-500"
              ></Image>
            </button>
          );
        })}
      </div>
    </div>
  );
}
