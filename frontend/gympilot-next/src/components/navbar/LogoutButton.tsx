"use client";

import { logout } from "@/libs/data";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
    router.push('/login')
  };

  return (
    <button onClick={handleLogout}>
      <svg
        className="bg-color-primary h-12 w-12 rounded-full p-2 hover:bg-color-primary-strong text-color-font hover:outline outline-color-primary outline-1 shadow-sm"
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
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
        />
      </svg>
    </button>
  );
}
