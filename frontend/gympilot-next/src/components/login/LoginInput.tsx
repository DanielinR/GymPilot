"use client";

import { ReactNode, useState } from "react";

export default function LoginInput({
  setValue,
  tittle,
  type = "",
  SvgIcon,
}: {
  setValue: Function;
  tittle: string;
  type?: string;
  SvgIcon: ({ className }: { className: string; }) => ReactNode;
}) {
  const [isFocused, setisFocused] = useState(false);

  return (
    <div
      className={`flex items-center gap-2 w-4/6 outline outline-1 rounded-2xl ${isFocused
        ? "outline-color-secondary"
        : "outline-color-primary"
        } p-2`}
    >
      <SvgIcon className={`h-10 w-10 ${isFocused
        ? "text-color-secondary"
        : "text-color-primary"
        }`}></SvgIcon>

      <div className="w-full h-10 flex flex-col justify-center pr-3">
        <span className={`text-sm ${isFocused
          ? "text-color-secondary"
          : "text-color-primary"
          }`}>{isFocused ? tittle : ""}</span>
        <input
          type={type}
          required
          onChange={(event) => {
            setValue(event.target.value);
          }}
          onBlur={() => setisFocused(false)}
          onFocus={() => setisFocused(true)}
          placeholder={isFocused ? "" : tittle}
          className={`bg-color-info-back focus:outline-none border-b-2 ${isFocused
            ? "border-color-secondary"
            : "border-color-primary"
            }`}
        ></input>
      </div>
    </div>
  );
}