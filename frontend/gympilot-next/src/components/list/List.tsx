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
  url,
  jsonParam,
  searchBy,
  createFunction,
  filters,
  render,
  functionButtons,
}: {
  tittle: string;
  createFunction?: Function;
  url: string;
  jsonParam?: string;
  filters?: string[];
  searchBy: string;
  render: (item: T, functionButtons?: (item: T) => void) => React.ReactNode;
  functionButtons?: (item: T) => void;
}) {
  const [jsonResponse, setJsonResponse] = useState<T[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    let isSubscribed = true;

    async function updateJsonResponse() {
      var finalUrl = url;
      var finalJsonParam = jsonParam;
      const templateFilter = searchParams.get("template")?.toString();
      finalUrl = templateFilter
        ? `/trainingTemplates/${await getIdByName(
            "/trainingTemplates",
            templateFilter
          )}`
        : url;
      finalJsonParam = templateFilter ? "exercises" : jsonParam;

      var response = await getJsonFromAPI(finalUrl, finalJsonParam);

      const searchString = searchParams.get("search")?.toString();
      response = filterJsonIncludes(
        response,
        searchString ? [{ key: searchBy, value: searchString }] : undefined
      );

      var filtersURL = Array.from(searchParams.entries()).map(([key, value]) => ({
        key,
        value,
      }));
      filtersURL = filtersURL.filter(
        ({ key }) => key !== "template" && key !== "search"
      );
      response = filterJsonEquals(response, filtersURL);
      if (isSubscribed) {
        setJsonResponse(response);
      }
    }

    updateJsonResponse();
    return () => {
      isSubscribed = false;
    };
  }, [searchParams, jsonParam, url, searchBy]);

  return (
    <div className="flex flex-col items-center pt-5 h-full w-full overflow-hidden">
      <h2
        className={`tittle text-white font-bold mb-5 text-center relative`}
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
      <div
        className={`relative flex flex-col items-center gap-5 w-full max-h-full h-full overflow-hidden`}
      >
        <SearchBar
          filters={filters}
          placeholder={`Search ${
            tittle.endsWith("?")
              ? tittle.slice(0, -1).toLowerCase()
              : tittle.toLowerCase()
          }`}
        ></SearchBar>
        <div className="px-4 pt-1 pb-1 w-full h-fit overflow-auto">
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
