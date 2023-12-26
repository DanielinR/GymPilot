export default function DeleteModal({ viewModal, selectAnswer }: { viewModal: boolean, selectAnswer:(answer:boolean) => void }) {
  return (
    <div
      className={`absolute z-50 bg-neutral-900 bg-opacity-80 py-28 px-5 flex items-center justify-center mt-10 w-[90%] rounded-xl ${
        viewModal ? "" : "hidden"
      }`}
    >
      <div className=" w-fit bg-neutral-900 bg-opacity-70 outline-color-secondary outline rounded-md flex flex-col items-center justify-center p-6">
        <h2 className="shadowText text-color-font text-3xl text-center font-bold">
          Delete exercise
        </h2>
        <h3 className="shadowText text-color-font text-xl text-center pb-6 font-light">
          This action cannot be undone.
        </h3>
        <div className="flex items-center gap-10">
          <button onClick={()=>{selectAnswer(false)}} className="px-3 py-1 bg-brand-500 hover:bg-brand-700 rounded-lg text-brand-900">NO</button>
          <button onClick={()=>{selectAnswer(true)}} className="px-3 py-1 bg-error-500 hover:bg-error-700 rounded-lg text-error-900">YES</button>
        </div>
      </div>
    </div>
  );
}
