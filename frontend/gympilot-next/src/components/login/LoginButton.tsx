"use client";

import { login } from "@/libs/data";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ArrowIcon from "../svg/ArrowIcon";

export default function LoginButton({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const router = useRouter()

  const handleLogin = async () => {
    try {
      const response = await login({ username, password });
      if (response) { router.push("/") }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      type="submit"
      formAction={handleLogin}
      className="flex justify-center items-center"
    >
      <ArrowIcon className="w-16 h-16 sm:h-20 sm:w-20 text-white bg-brand-500 hover:bg-brand-700 rounded-2xl p-3 shadow-sm shadow-brand-500"></ArrowIcon>
    </button>
  );
}
