export default function SelectNumber({
  selectionText,
  handleSelection,
  number,
  setNumber,
}: {
  selectionText: string;
  handleSelection: Function;
  number: string;
  setNumber: (number?: number) => void;
}) {
  return (
    <form className="flex flex-col gap-4 items-center justify-center">
      <div className="flex flex-col gap-2 items-center rounded-md bg-color-info-back p-4 pb-2">
        <input
          onChange={(event) => {
            setNumber(+event.target.value);
          }}
          value={number}
          type="number"
          max={999}
          required
          placeholder="0"
          className="bg-color-info-back rounded-md outline-1 outline outline-gray-400 w-28 text-center text-6xl font-bold text-color-secondary"
        ></input>
        <span className="text-color-font text-2xl rounded-full bg-color-primary-strong pt-1 pb-1 pl-5 pr-5">
          {selectionText}
        </span>
      </div>
      <button
        type="submit"
        formAction={() => {
          handleSelection();
        }}
        className="bg-color-secondary hover:bg-color-secondary-dark text-3xl font-bold text-color-font p-4 rounded-lg"
      >
        Add
      </button>
    </form>
  );
}
