"use client";

import DayInfo from "@/components/Home/DayInfo";
import InfoCard from "@/components/Home/InfoCard";
import MyCalendar from "@/components/calendar/MyCalendar";
import CalendarIcon from "@/components/svg/CalendarIcon";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  return (
    <div className="grid grid-rows-[7fr_2fr_3fr] lg:grid-rows-4 lg:grid-cols-[3fr_1fr_1fr] h-full w-full gap-8 p-8 pt-2 md:pt-5">
      <div className="lg:row-start-1 lg:row-end-4 flex items-center justify-center flex-col gap-2">
        <div className="flex items-center justify-center gap-2 tittle">
          <CalendarIcon className="h-10 w-10 text-white"></CalendarIcon>
          <h2 className="text-white font-extrabold text-center flex items-center justify-center">
            TRAINING CALENDAR
          </h2>
        </div>
        <MyCalendar setSelectedDate={setSelectedDate}/>
      </div>
      <InfoCard tittle="Kg lifted" info="44"></InfoCard>
      <InfoCard tittle="Consecutive days" info="44"></InfoCard>
      <InfoCard tittle="Trained days" info="44"></InfoCard>
      <InfoCard tittle="Kg lifted" info="44"></InfoCard>
      <InfoCard tittle="Consecutive days" info="44"></InfoCard>
      <InfoCard tittle="Trained days" info="44"></InfoCard>
      <DayInfo date={selectedDate}></DayInfo>
      <Link href={"/createTraining"} className="shadowText bg-brand-500 hover:bg-brand-700 flex items-center justify-center py-5 px-8 rounded-xl text-center text-white text-4xl lg:text-5xl font-extrabold shadow-lg shadow-brand lg:col-start-2 lg:col-end-4 lg:m-0 lg:mb-0 mb-10 m-5">
        <h2>TRAIN</h2>
      </Link>
    </div>
  );
}
