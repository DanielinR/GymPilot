"use client";

import { useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const WAIT_BETWEEN_SEARCHES = 222;

export default function SearchBar({ placeholder }: { placeholder?: string }) {
  const [isFocused, setIsFocused] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch= useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, WAIT_BETWEEN_SEARCHES)

  return (
    <div
      className={`flex items-center bg-color-info-back w-full rounded-md h-10  outline ${
        isFocused ? "outline-2" : "outline-0"
      } outline-color-secondary`}
    >
      <input
        onChange={(event) => {
          handleSearch(event.target.value);
        }}
        className="flex-1 bg-color-info-back focus:outline-none ml-4"
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        placeholder={placeholder ? placeholder : ""}
        defaultValue={searchParams.get("search")?.toString()}
      ></input>
      <button className="bg-color-secondary hover:bg-color-secondary-dark p-2 h-full rounded-e-md w-12 flex items-center justify-center">
        <svg
          className="h-6 w-6 text-color-font"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </div>
  );
}
