import SelectNumber from "../../SelectNumber";
import { TrainingContext } from "../../createTrainingContextProvider";
import { useContext } from "react";

export default function CreateSetsModal() {

  const { setViewModal, viewModal, setActualWeight, actualWeight } = useContext(TrainingContext)!

  return (
    <div className={`bg-black bg-opacity-60 h-screen w-screen flex items-center justify-center ${viewModal? "" : "hidden"}`}>
      <div className="bg-color-primary w-[75%] outline-color-secondary outline rounded-md flex flex-col items-center justify-center p-6 gap-4">
        <h2 className="text-color-font text-3xl text-center font-bold">
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
