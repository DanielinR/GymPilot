export default function AddElementButton(){
    return(
        <button>
          <svg
            className="bg-color-secondary h-16 rounded-full p-2 text-color-font shadow-2xl hover:bg-color-secondary-dark"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
    )
}