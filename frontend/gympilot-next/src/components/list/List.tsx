"use client";

import SearchBar from "./SearchBar/SearchBar";
import ListGrid from "@/components/list/ListGrid";
import React, { useState, useEffect } from "react";
import { getIdByName, getJsonFromAPI } from "@/libs/data";
import { useSearchParams } from "next/navigation";
import { filterJsonEquals, filterJsonIncludes } from "@/libs/utils";
import PlusIcon from "../svg/PlusIcon";

export default function List<T extends { id: number }>({
  tittle,
  tittleSize = "text-5xl",
  url,
  jsonParam,
  searchBy,
  createFunction,
  filters,
  render,
  functionButtons,
}: {
  tittle: string;
  tittleSize?: string;
  createFunction?: Function;
  url: string;
  jsonParam?: string;
  filters?:string[];
  searchBy: string;
  render: (item: T, functionButtons?: (item: T) => void) => React.ReactNode;
  functionButtons?: (item: T) => void;
}) {
  const [jsonResponse, setJsonResponse] = useState<T[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    async function updateJsonResponse() {
      var finalUrl = url;
      var finalJsonParam = jsonParam;
      const templateFilter = searchParams.get("template")?.toString();
      if (templateFilter) {
        finalUrl =
          "/trainingTemplates/" +
          (await getIdByName("/trainingTemplates", templateFilter));
        finalJsonParam = "exercises";
      } else {
        finalJsonParam = jsonParam;
        finalUrl = url;
      }

      var response = await getJsonFromAPI(finalUrl, finalJsonParam);

      const searchString = searchParams.get("search")?.toString();
      response = filterJsonIncludes(
        response,
        searchString ? [{ key: searchBy, value: searchString }] : undefined
      );

      var filters = Array.from(searchParams.entries()).map(([key, value]) => ({
        key,
        value,
      }));
      filters = filters.filter(
        ({ key }) => key !== "template" && key !== "search"
      );
      response = filterJsonEquals(response, filters);
      setJsonResponse(response);
    }

    updateJsonResponse();
  }, [jsonParam, url, searchParams, searchBy]);

  return (
    <div className="flex flex-col items-center pt-5 h-full w-full overflow-hidden">
      <h2
        className={`tittle text-white ${tittleSize} font-bold mb-5 text-center relative`}
      >
        {tittle}
        {createFunction && (
          <button
            onClick={() => {
              createFunction();
            }}
            className="absolute top-0 -right-2 translate-x-1/2 -translate-y-1/2 bg-brand-500 hover:bg-brand-700 rounded-full p-1 flex gap-2 items-center shadow-lg"
          >
            <PlusIcon className="w-8 h-8"></PlusIcon>
          </button>
        )}
      </h2>
      <div className={`relative flex flex-col items-center gap-5 w-full max-h-full h-full overflow-hidden`}>
        <SearchBar
          filters={filters}
          placeholder={`Search ${
            tittle.endsWith("?")
              ? tittle.slice(0, -1).toLowerCase()
              : tittle.toLowerCase()
          }`}
        ></SearchBar>
        <div
          className="px-4 pt-1 pb-1 w-full h-fit overflow-auto"
        >
          <ListGrid<T>
            json={jsonResponse}
            render={render}
            functionButtons={functionButtons}
          ></ListGrid>
        </div>
      </div>
    </div>
  );
}
