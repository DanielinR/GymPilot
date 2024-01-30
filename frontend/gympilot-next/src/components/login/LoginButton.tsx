"use client";

import { login } from "@/libs/data";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ArrowIcon from "../svg/ArrowIcon";
import { ClipLoader } from "react-spinners";

export default function LoginButton({
  username,
  password,
  setError,
}: {
  username: string;
  password: string;
  setError: Function;
}) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)
    setTimeout(async () => {
      try {
        const response = await login({ username, password });
        if (response) { router.push("/home") }
      } catch (error) {
        setError(true)
      }
      setLoading(false);
    }, 10);
  };

  return (
    <button
      type="submit"
      formAction={handleLogin}
      className="flex justify-center items-center bg-brand-500 hover:bg-brand-700 rounded-2xl p-3 shadow-sm shadow-brand-500"
    >
      {!loading && <ArrowIcon className="w-16 h-16 sm:h-20 sm:w-20 text-white"></ArrowIcon>}
      {loading && <ClipLoader color="white" size={64}></ClipLoader>}

    </button>
  );
}
