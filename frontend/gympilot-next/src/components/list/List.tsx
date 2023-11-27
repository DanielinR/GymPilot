"use client";

import React, { useState, useEffect } from "react";
import SearchBar from "@/components/SearchBar";
import ListGrid from "@/components/list/ListGrid";
import { getJsonFromAPI } from "@/libs/data";

export default function List<T extends { id: number }>({
  tittle,
  url,
  render,
}: {
  tittle: string;
  url: string;
  render: (item: T, url: string) => React.ReactNode;
}) {
  const [jsonResponse, setJsonResponse] = useState<T[]>([]);

  useEffect(() => {
    async function updateJsonResponse() {
      setJsonResponse(await getJsonFromAPI(url));
    }

    updateJsonResponse();
  }, []);

  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="text-color-secondary text-5xl font-bold stroke-color-font stroke-2 mb-10">
        {tittle}
      </h1>
      <div className="flex flex-col items-center gap-10 w-full">
        <SearchBar></SearchBar>
        <button>
          <svg className="bg-color-secondary h-16 rounded-full p-2 text-color-font shadow-2xl hover:bg-color-secondary-dark"
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
        <div className="pl-7 pr-7 h-full w-full">
          <ListGrid<T> url={url} json={jsonResponse} render={render}></ListGrid>
        </div>
      </div>
    </div>
  );
}
