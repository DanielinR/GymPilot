import ArrowIcon from "@/components/svg/ArrowIcon";
import { useState } from "react";

export default function NameModal({
  viewModal,
  setName,
}: {
  viewModal: boolean;
  setName: (name: string) => void;
}) {
  const [nameAux, setNameAux] = useState("");

  return (
    <div
      className={`absolute z-50 bg-neutral-900 bg-opacity-80 py-28 px-5 flex items-center justify-center mt-10 w-[90%] rounded-xl text-white ${
        viewModal ? "" : "hidden"
      }`}
    >
      <form className=" w-fit bg-neutral-900 bg-opacity-70 outline-color-secondary outline rounded-md flex flex-col items-center justify-center p-6 gap-5">
        <h2 className="shadowText text-color-font text-3xl text-center font-bold">
          Enter new exercise name:
        </h2>
        <input
          onChange={(event) => {
            setNameAux(event.target.value);
          }}
          required
          className="w-full text-3xl bg-neutral-700 rounded-lg p-2 focus:outline-brand-500 outline text-center outline-neutral-300"
        ></input>
        <div className="flex items-center gap-10">
          <button
            formAction={() => {
              if (!nameAux) return;
              setName(nameAux);
            }}
            className="px-5 py-3 bg-brand-500 hover:bg-brand-700 rounded-lg text-white shadowText text-2xl shadow-xl"
          >
            <ArrowIcon className="h-10 w-10"></ArrowIcon>
          </button>
        </div>
      </form>
    </div>
  );
}
