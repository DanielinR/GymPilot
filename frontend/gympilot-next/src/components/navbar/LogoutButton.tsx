"use client";

import { logout } from "@/libs/data";
import { useRouter } from "next/navigation";
import LogOutIcon from "../svg/LogOutIcon";

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
      <LogOutIcon
        className="bg-neutral-700 h-12 w-12 rounded-full p-2 hover:bg-color-primary-strong text-color-font hover:bg-neutral-900 shadow-sm"
      ></LogOutIcon>
    </button>
  );
}
