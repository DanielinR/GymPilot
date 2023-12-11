"use client";

import { login } from "@/libs/data";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

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
      className="text-xl font-bold bg-color-secondary flex justify-center items-center w-2/5 rounded-2xl p-3 shadow-xl text-color-font"
    >
      Login
    </button>
  );
}
