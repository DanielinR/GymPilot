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
        className="bg-color-primary h-12 w-12 rounded-full p-2 hover:bg-color-primary-strong text-color-font hover:outline outline-color-primary outline-1 shadow-sm"
      ></LogOutIcon>
    </button>
  );
}
