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
      className={`flex items-center gap-2 w-full outline outline-1 rounded-lg bg-neutral-700 hover:bg-neutral-800 ${isFocused
        ? "outline-brand-500 bg-neutral-800"
        : "outline-neutral-200"
        } p-2`}
    >
      <SvgIcon className={`h-10 w-10 ${isFocused
        ? "text-brand-500"
        : "text-neutral-200"
        }`}></SvgIcon>

      <div className="w-full h-10 flex flex-col justify-center pr-3">
        <span className={`text-sm ${isFocused
          ? "text-brand-500"
          : "text-neutral-200"
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
          autoCapitalize="off"
          className={`bg-transparent focus:outline-none text-xl text-white ${isFocused
            ? "border-brand-500 pb-1"
            : "border-neutral-200"
            }`}
        ></input>
      </div>
    </div>
  );
}