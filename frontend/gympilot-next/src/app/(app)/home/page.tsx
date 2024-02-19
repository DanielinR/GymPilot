"use client";

import DayInfo from "@/components/Home/DayInfo";
import InfoCard from "@/components/Home/InfoCard";
import MyCalendar from "@/components/calendar/MyCalendar";
import CalendarIcon from "@/components/svg/CalendarIcon";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [actualTrainingText, setActualTrainingText] = useState<string|null>();
  useEffect(()=>{
    setActualTrainingText(localStorage.getItem('actualTraining'))
  },[
    
  ])

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="max-w-[88rem] w-full h-full grid grid-rows-[7fr_2fr_3fr] lg:grid-rows-[3fr_1fr] lg:grid-cols-2 xl:grid-rows-4 xl:grid-cols-[3fr_1fr_1fr] gap-8 p-8 pt-2 md:pt-5">
        <div className="lg:col-start-1 lg:col-end-4 xl:row-start-1 xl:row-end-4 flex items-center justify-center flex-col gap-2">
          <div className="flex items-center justify-center gap-2 tittle">
            <CalendarIcon className="h-10 w-10 text-white"></CalendarIcon>
            <h2 className="text-white font-extrabold text-center flex items-center justify-center">
              TRAINING CALENDAR
            </h2>
          </div>
          <MyCalendar setSelectedDate={setSelectedDate}/>
        </div>
        <DayInfo date={selectedDate}></DayInfo>
        <Link href={"/createTraining"} className="shadowText bg-brand-500 hover:bg-brand-700 flex items-center justify-center py-5 px-8 rounded-xl text-center text-white text-4xl lg:text-5xl font-extrabold shadow-lg shadow-brand lg:col-start-2 lg:col-end-4 lg:m-0 lg:mb-0 mb-10 m-5">
          {!actualTrainingText ? <h2>TRAIN</h2> : <h2 className="text-3xl">CONTINUE TRAINING</h2>}
        </Link>
      </div>
    </div>
  );
}
