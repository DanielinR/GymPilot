"use client"

import List from "@/components/list/List";
import ListElement from "@/components/list/ListElementFunction";
import { useState } from "react";

export default function CreateTrainingPage(){
    enum phases {
        TrainingTemplates,
        Exercises,
        Weight,
    } 
    const QUESTIONS = ["What workout will you do today?", "What exercise do you want to do now?"] 
    const [phase, setPhase] = useState(phases.TrainingTemplates)
    const [actualExercise, setactualExercise] = useState<number>()
    const [template, settemplate] = useState<number>()

    const handleListButtonClick = (id: number) => {
        switch(phase){
            case phases.TrainingTemplates: {
                settemplate(id);
                setPhase(phases.Exercises);
                break;
            }
            case phases.Exercises: {
                setactualExercise(id)
                setPhase(phases.Weight);
                break;
            }
        }
    }
    if(phase === phases.Weight){
        return(
        <div className="h-full w-full flex flex-col items-center justify-start gap-20 pt-10">
            <h1 className="text-5xl text-center font-bold text-color-secondary">How much weight are you going to use?</h1>
            <div className="flex gap-2 items-center rounded-md bg-color-info-back p-4">
                <input type="number" className="bg-color-info-back focus:outline-none w-36 text-center text-6xl"></input>
                <span className="text-6xl">kg</span>
            </div>
        </div>
        );
    }else{
        return(
            <div className="h-full w-full">
                <List<TrainingTemplate> tittle={QUESTIONS[phase]} searchBy="name" url="" render={ListElement} functionButtons={handleListButtonClick}></List>
            </div>
        );            
    }
}

type TrainingTemplate = {
    id: number,
    name: string,
}
type Set = {
    reps: number, 
    weight: number,
}
type Exercise = {
    name: string,
    sets: Set[],
}
