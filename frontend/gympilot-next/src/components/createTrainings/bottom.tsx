import { phases } from "@/libs/utils";

export default function CreateTrainingBottom({
  phase,
  handleConfirmButton,
}: {
  phase: number;
  handleConfirmButton: Function;
}) {
  return (
    <div className="flex justify-end w-full pb-3 pr-3">
      <button
        onClick={() => {
          handleConfirmButton(-1, "");
        }}
      >
        {phase == phases.Sets && (
          <svg
            className="h-16 w-16 bg-color-secondary p-2 rounded-full text-color-font"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
        {phase == phases.Exercises && (
          <div className="bg-red-700 h-14 w-44 text-center flex items-center justify-center font-bold text-xl text-color-font rounded-full p-2 hover:bg-color-secondary-dark">Finish training</div>
        )}
      </button>
    </div>
  );
}
