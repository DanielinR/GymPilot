"use client";

import { useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import SearchIcon from "./svg/SearchIcon";

const WAIT_BETWEEN_SEARCHES = 222;

export default function SearchBar({ placeholder }: { placeholder?: string }) {
  const [isFocused, setIsFocused] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
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
      className={`flex items-center bg-color-info-back w-full rounded-md h-10  outline ${isFocused ? "outline-2" : "outline-0"
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
      <button className="bg-color-secondary p-2 h-full rounded-e-md w-12 flex items-center justify-center">
        <SearchIcon
          className="h-6 w-6 text-color-font"
        ></SearchIcon>
      </button>
    </div>
  );
}
