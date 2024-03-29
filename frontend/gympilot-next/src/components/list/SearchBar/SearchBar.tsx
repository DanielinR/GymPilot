"use client";

import { useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import SearchIcon from "../../svg/SearchIcon";
import FilterButton from "./FilterButton";
import XIcon from "@/components/svg/XIcon";

const WAIT_BETWEEN_SEARCHES = 222;

export default function SearchBar({
  placeholder,
  filters,
}: {
  placeholder?: string;
  filters?: string[];
}) {
  const [isFocused, setIsFocused] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleClearSearch = ()=>{
    const input: HTMLInputElement | null = document.getElementById('searchInput') as HTMLInputElement;
    if (!input) {return}
    input.value = '';
    handleSearch("")
  }
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, WAIT_BETWEEN_SEARCHES);

  return (
    <div className="w-full flex flex-col gap-1 p-0 m-1 px-2">
      <div
        className={`flex items-center bg-neutral-500 w-full rounded-md h-10  outline ${
          isFocused ? "outline-2" : "outline-0"
        } outline-brand-500`}
      >
        <input
          id="searchInput"
          onChange={(event) => {
            handleSearch(event.target.value);
          }}
          className="flex-1 bg-transparent text-white text-lg focus:outline-none ml-4 w-full"
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder ? placeholder : ""}
          defaultValue={searchParams.get("search")?.toString()}
        ></input>
        <button onClick={()=>{handleClearSearch()}} className="mr-2 rounded-full bg-neutral-600 hover:bg-neutral-800 p-1">
          <XIcon className="h-5 w-5 text-neutral-100"></XIcon>
        </button>
        <button className="bg-brand-500 hover:bg-brand-700 p-2 h-full rounded-e-md w-12 flex items-center justify-center">
          <SearchIcon className="h-6 w-6 text-white"></SearchIcon>
        </button>
      </div>
      <div className="flex items-center justify-start gap-1">
        {filters?.map((item) => {
          return(<FilterButton key={item} filter={item}></FilterButton>)
        })}
      </div>
    </div>
  );
}
