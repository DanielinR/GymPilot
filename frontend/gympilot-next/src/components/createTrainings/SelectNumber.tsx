export default function SelectNumber({
  selectionText,
  handleSelection,
  number,
  setNumber,
}: {
  selectionText: string;
  handleSelection: Function;
  number: string;
  setNumber: (number: number) => void;
}) {
  return (
    <form name="selectNumberForm" className="flex flex-col gap-4 items-center justify-center text-white">
      <div className="flex flex-col gap-2 items-center rounded-md bg-neutral-500 bg-opacity-90 p-4 pb-2 outline outline-brand-500">
        <input
          onChange={(event) => {
            setNumber(+event.target.value);
          }}
          value={number}
          type="number"
          max={999}
          required
          placeholder="0"
          step={0.01}
          className="bg-neutral-700 rounded-md outline-1 outline outline-neutral-300 w-28 text-center text-6xl font-bold text-color-secondary"
        ></input>
        <span className="text-2xl rounded-full bg-color-primary-strong pt-1 pb-1 pl-5 pr-5">
          {selectionText}
        </span>
      </div>
      <button
        type="submit"
        formAction={() => {
          handleSelection();
        }}
        className="shadowText shadow-xl bg-brand-500 hover:bg-brand-700 text-3xl font-bold p-4 rounded-lg"
      >
        Add
      </button>
    </form>
  );
}
