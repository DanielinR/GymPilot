import SearchBar from "@/components/SearchBar";
import ListGrid from "@/components/list/ListGrid";
import AddElementButton from "./AddElementButton";
import React, { useState, useEffect, Suspense } from "react";
import { getJsonFromAPI } from "@/libs/data";
import { useSearchParams } from "next/navigation";

export default function List<T extends { id: number }>({
  tittle,
  url,
  jsonParam,
  searchBy,
  render,
  functionButtons,
}: {
  tittle: string;
  url: string;
  jsonParam?: string;
  searchBy: string;
  render: (item: T, functionButtons?: Function) => React.ReactNode;
  functionButtons?: Function;
}) {
  const [jsonResponse, setJsonResponse] = useState<T[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    async function updateJsonResponse() {
      try {
        const response = await getJsonFromAPI(url, jsonParam, searchParams.get("search")?.toString(), searchBy);
        setJsonResponse(response);
      } catch (error) {
        const response:any = [{"id":1, "name":"pecho"},{"id":2, "name":"espalda"},{"id":3, "name":"pierna"},{"id":4, "name":"patass"},{"id":5, "name":"pecho3"},{"id":6, "name":"3333"},{"id":7, "name":"pecho"}]
        setJsonResponse(response)
      }
    }

    updateJsonResponse();
  }, [jsonParam, url, searchParams]);

  return (
    <div className="flex flex-col items-center p-10 h-full">
      <h1 className="text-color-secondary text-5xl font-bold stroke-color-font stroke-2 mb-10 h-[10%] text-center">
        {tittle}
      </h1>
      <div className="flex flex-col items-center gap-5 w-full h-[90%]">
        <SearchBar placeholder={`Search ${tittle.toLowerCase()}`}></SearchBar>
        <AddElementButton/>
        <div className="pl-7 pr-7 pt-1 pb-1 w-full overflow-auto">
            <ListGrid<T> json={jsonResponse} render={render} functionButtons={functionButtons}></ListGrid>
        </div>
      </div>
    </div>
  );
}
