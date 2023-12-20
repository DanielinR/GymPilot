"use client";

import List from "@/components/list/List";
import ListElement from "@/components/list/ListElementIdLink";

export default function ExercisePage({params}:{params:{exercise:string}}){

    type Exercise = {
        id: number,
        name: string;
        type: number;
        last_weight: number;
      };

    return(
        <div></div>
    );
}