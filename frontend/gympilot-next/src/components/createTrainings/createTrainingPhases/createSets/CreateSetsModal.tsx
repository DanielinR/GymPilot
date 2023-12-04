import SelectNumber from "../SelectNumber";

export default function CreateSetsModal({
  viewModal,
  setViewModel,
  setWeight,
  weight,
}: {
  viewModal: boolean;
  setViewModel: Function;
  setWeight: (number?: number) => void;
  weight?: number;
}) {
function handleSelection(){
    setViewModel(false)
}

  return (
    <div className={`fixed bg-black bg-opacity-60 h-screen w-screen flex items-center justify-center ${viewModal? "" : "hidden"}`}>
      <div className="bg-color-primary w-[75%] outline-color-secondary outline rounded-md flex flex-col items-center justify-center p-6 gap-4">
        <h2 className="text-color-font text-3xl text-center font-bold">
          How much weight are you lifting?
        </h2>
        <SelectNumber
          selectionText="kg"
          setNumber={setWeight}
          handleSelection={handleSelection}
          number={weight ? weight.toString() : ""}
        ></SelectNumber>
      </div>
    </div>
  );
}
