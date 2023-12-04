export default function CreateSetsTittle({
  actualExercise,
  actualWeight,
  setViewModal,
}: {
  actualExercise: { id: number; name: string };
  actualWeight?: number;
  setViewModal: Function;
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-color-secondary text-5xl font-bold bg-color-info-back rounded-md p-4 text-center">
        {actualExercise.name.toUpperCase()}
      </h1>
      <div className="relative -translate-y-2">
        <h3 className="text-color-font text-2xl bg-color-primary-strong p-2 rounded-md w-32 text-center">
          {actualWeight ? actualWeight : "-"} kg
        </h3>
        <button onClick={() => {setViewModal(true)}}
        className="flex items-center justify-center bg-color-secondary hover:bg-color-secondary-dark rounded-full h-9 w-9 absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3">
          <svg
            className="text-color-font h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
