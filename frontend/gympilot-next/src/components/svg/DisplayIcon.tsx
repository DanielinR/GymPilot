export default function DisplayIcon({ className }: { className: string }) {
    return (
      <svg
        className={className}
        fill="none"
        strokeWidth={1.5}
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 10l5 5 5-5H7z"
        />
      </svg>
    );
  }
  