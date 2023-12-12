"use client";

import SearchBar from "@/components/SearchBar";
import ListGrid from "@/components/list/ListGrid";
import AddElementButton from "./AddElementButton";
import React, { useState, useEffect, Suspense } from "react";
import { getJsonFromAPI } from "@/libs/data";
import { useSearchParams } from "next/navigation";

export default function List<T extends { id: number }>({
  tittle,
  tittleSize = "text-5xl",
  listHeight,
  url,
  jsonParam,
  searchBy,
  addButton = false,
  render,
  functionButtons,
}: {
  tittle: string;
  tittleSize?: string;
  listHeight?: number;
  url: string;
  jsonParam?: string;
  searchBy: string;
  addButton?: boolean;
  render: (item: T, functionButtons?: (item:T) => void) => React.ReactNode;
  functionButtons?: (item:T) => void;
}) {
  const [jsonResponse, setJsonResponse] = useState<T[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    async function updateJsonResponse() {
        const response = await getJsonFromAPI(url, jsonParam, searchParams.get("search")?.toString(), searchBy);
        setJsonResponse(response);
    }

    updateJsonResponse();
  }, [jsonParam, url, searchParams, searchBy]);

  return (
    <div className="flex flex-col items-center pt-2 h-full w-full">
      <h1 className={`text-color-font ${tittleSize} font-bold mb-5 text-center`}>
        {tittle}
      </h1>
      <div style={{ height: `${listHeight}px` }} className={`flex flex-col items-center gap-5 w-full`}>
        <SearchBar placeholder={`Search ${tittle.endsWith("?") ? tittle.slice(0,-1).toLowerCase() : tittle.toLowerCase()}`}></SearchBar>
        {addButton && <AddElementButton/>}
        <div className="px-4 pt-1 pb-1 w-full overflow-auto">
            <ListGrid<T> json={jsonResponse} render={render} functionButtons={functionButtons}></ListGrid>
        </div>
      </div>
    </div>
  );
}
