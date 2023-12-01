"use client";

import { login } from "@/libs/data";
import React, { useState } from "react";

export default function LoginButton({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const handleLogin = async () => {
    try {
      const response = await login({ username, password });
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
