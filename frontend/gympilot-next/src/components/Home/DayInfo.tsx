import ArrowIcon from "@/components/svg/ArrowIcon";
import { getJsonFromAPI, setTraining } from "@/libs/data";
import { SimpleDate, filterJsonEquals, formatWithZeros } from "@/libs/utils";
import { monthNames } from "@/libs/utils";
import { useEffect, useState } from "react";

export default function DayInfo({date}:{date?:SimpleDate}) {
  const [trainings, setTrainings] = useState()
  const [trainingTemplate, setTrainingTemplate] = useState()
  useEffect(()=>{
    async function updateData() {
      const data = await getJsonFromAPI("/trainings")
      setTrainings(data)
    }
    updateData()
  },[])
  useEffect(()=>{
    async function updateTrainingTemplate() {
      if(!date || !trainings){return}
      let newTraining = filterJsonEquals(trainings, [{key: "date",value:`${date.year}-${formatWithZeros(date.month, 2)}-${formatWithZeros(date.day, 2)}`}])[0]
      newTraining ? setTrainingTemplate(newTraining["trainingTemplate"]) : setTrainingTemplate(undefined)
    }
    updateTrainingTemplate()
  },[date, trainings])
  return (
    <div className="bg-neutral-500 rounded-lg bg-opacity-90 flex items-center justify-center gap-10 text-white">
      <div className="flex flex-col items-center justify-center">
        <span className="flex items-center justify-center text-2xl md:text-3xl font-bold rounded-tl-xl w-full">
          {date ? monthNames[date.month - 1] + " - " + date.day : "Select a date"}
        </span>
        <span className="flex items-center justify-center text-xl md:text-2xl">{date ? (trainingTemplate ? trainingTemplate : "No training") : ""}</span>
      </div>
      <button className="bg-brand-500 hover:bg-brand-700 rounded-full flex items-center justify-center shadow-2xl p-3">
        <ArrowIcon className="h-10 w-10 md:w-14 md:h-14 text-white"></ArrowIcon>
      </button>
    </div>
  );
}
