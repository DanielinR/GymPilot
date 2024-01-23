import SelectNumber from "../../SelectNumber";
import { TrainingContext } from "../../createTrainingContextProvider";
import { useContext } from "react";

export default function CreateSetsModal() {

  const { setViewModal, viewModal, setActualWeight, actualWeight } = useContext(TrainingContext)!

  return (
    <div className={`left-1/2 -translate-x-1/2 absolute z-50 bg-neutral-900 bg-opacity-80 py-28 px-5 flex items-center justify-center mt-10 w-[90%] rounded-xl text-white ${viewModal? "" : "hidden"}`}>
      <div className="bg-neutral-900 bg-opacity-70 w-[75%] outline rounded-md flex flex-col items-center justify-center p-6 gap-4">
        <h2 className="shadowText text-3xl text-center font-bold">
          How much weight are you lifting?
        </h2>
        <SelectNumber
          selectionText="kg"
          setNumber={setActualWeight}
          handleSelection={() => {setViewModal(false)}}
          number={actualWeight ? actualWeight.toString() : ""}
        ></SelectNumber>
      </div>
    </div>
  );
}
