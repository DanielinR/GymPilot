import { useContext } from "react";
import { TrainingContext } from "../../createTrainingContextProvider";
import EditIcon from "@/components/svg/EditIcon";

export default function CreateSetsTittle() {
  const { actualExercise, actualWeight, setViewModal } = useContext(TrainingContext)!
  
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-color-secondary text-5xl font-bold bg-color-info-back rounded-md p-4 text-center">
        {actualExercise?.name.toUpperCase()}
      </h1>
      <div className="relative -translate-y-2">
        <h3 className="text-color-font text-2xl bg-color-primary-strong p-2 rounded-md w-32 text-center">
          {actualWeight ? actualWeight : "-"} kg
        </h3>
        <button onClick={() => {setViewModal(true)}}
        className="flex items-center justify-center bg-color-secondary hover:bg-color-secondary-dark rounded-full h-9 w-9 absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3">
          <EditIcon className="text-color-font h-6 w-6"/>
        </button>
      </div>
    </div>
  );
}
