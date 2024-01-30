import { useContext } from "react";
import { TrainingContext } from "../../createTrainingContextProvider";
import EditIcon from "@/components/svg/EditIcon";

export default function CreateSetsTittle() {
  const { actualExercise, actualWeight, setViewModal } = useContext(TrainingContext)!
  
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <h1 className="tittle font-bold rounded-md p-4 pt-7 text-center">
        {actualExercise?.name.toUpperCase()}
      </h1>
      <div className="relative -translate-y-2">
        <h3 className="text-color-font text-2xl bg-neutral-500 bg-opacity-90 p-2 rounded-md w-32 text-center">
          {actualWeight ? actualWeight : "-"} kg
        </h3>
        <button onClick={() => {setViewModal(true)}}
        className="flex items-center justify-center bg-brand-500 hover:bg-brand-700 rounded-full h-9 w-9 absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3">
          <EditIcon className="text-color-font h-6 w-6"/>
        </button>
      </div>
    </div>
  );
}
