"use client";

import { useState } from "react";

export default function LoginInput({
  tittle,
  svgPath,
}: {
  tittle: string;
  svgPath: string;
}){
  const [isFocused, setisFocused] = useState(false);

    return(
      <div
          className={`flex items-center gap-2 w-4/6 outline outline-1 rounded-2xl ${
            isFocused
              ? "outline-color-secondary"
              : "outline-color-primary"
          } p-2`}
        >
          <svg
            className={`h-10 w-10 ${
              isFocused
                ? "text-color-secondary"
                : "text-color-primary"
            }`}
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
              d={svgPath}
            />
          </svg>
          <div className="w-full h-10 flex flex-col justify-center pr-3">
            <span className={`text-sm ${
              isFocused
                ? "text-color-secondary"
                : "text-color-primary"
            }`}>{isFocused ? tittle : ""}</span>
            <input
              onBlur={() => setisFocused(false)}
              onFocus={() => setisFocused(true)}
              placeholder={isFocused ? "" : tittle}
              className={`bg-color-info-back focus:outline-none border-b-2 ${
                isFocused
                  ? "border-color-secondary"
                  : "border-color-primary"
              }`}
            ></input>
          </div>
        </div>
    );
}