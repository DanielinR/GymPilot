"use client";

import List from "@/components/list/List";
import ListElement from "@/components/list/ListElementIdLink";

export default function ExercisePage({params}:{params:{exercise:string}}){

    type Exercise = {
        id: number,
        name: string;
      };

    return(
        <List<Exercise> tittle="Exercises" url={"/exerciseTypes/" + params.exercise} jsonParam="exercises" searchBy="name" render={ListElement}></List>
    );
}