import SearchBar from "@/components/SearchBar";
import ListGrid from "@/components/list/ListGrid";
import AddElementButton from "./AddElementButton";
import React, { useState, useEffect, Suspense } from "react";
import { getJsonFromAPI } from "@/libs/data";
import { useSearchParams } from "next/navigation";

export default function List<T extends { id: number }>({
  tittle,
  listHeight,
  url,
  jsonParam,
  searchBy,
  addButton,
  render,
  functionButtons,
}: {
  tittle: string;
  listHeight?: number;
  url: string;
  jsonParam?: string;
  searchBy: string;
  addButton: boolean;
  render: (item: T, functionButtons?: Function) => React.ReactNode;
  functionButtons?: Function;
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
    <div className="flex flex-col items-center p-10 h-full">
      <h1 className="text-color-font text-5xl font-bold mb-10 text-center">
        {tittle}
      </h1>
      <div style={{ height: `${listHeight}px` }} className={`flex flex-col items-center gap-5 w-full`}>
        <SearchBar placeholder={`Search ${tittle.endsWith("?") ? tittle.slice(0,-1).toLowerCase() : tittle.toLowerCase()}`}></SearchBar>
        {addButton && <AddElementButton/>}
        <div className="pl-7 pr-7 pt-1 pb-1 w-full overflow-auto">
            <ListGrid<T> json={jsonResponse} render={render} functionButtons={functionButtons}></ListGrid>
        </div>
      </div>
    </div>
  );
}
