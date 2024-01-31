"use client";

import React, { useState, useEffect } from "react";
("../libs/utils");
import { getMonthTrainings } from "@/libs/data";
import Calendar from "react-calendar";
import MoveButton from "./MoveButton";
import "./calendar.css";

export default function MyCalendar({
  setSelectedDate = () => {},
}: {
  setSelectedDate?: Function;
}) {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [trainedDays, setTrainedDays] = useState<number[]>([]);

  function handleChange({
    activeStartDate,
    view,
    value,
    action,
  }: {
    activeStartDate: any;
    view: any;
    value: any;
    action: any;
  }) {
    if (view == "month") {
      setCurrentMonth(activeStartDate?.getMonth() + 1 || 0);
      setCurrentYear(activeStartDate?.getFullYear() || 2024);
    }
  }

  useEffect(() => {
    async function updateTrainedDays() {
      setTrainedDays(await getMonthTrainings(currentMonth, currentYear));
    }
    updateTrainedDays();
  }, [currentMonth, currentYear]);

  return (
    <Calendar
      className={
        "p-4 md:p-7 h-full w-full text-white flex flex-col items-center justify-center bg-neutral-500 bg-opacity-90 rounded-lg gap-4 md:gap-7"
      }
      locale="en"
      onClickDay={(date) => {
        setSelectedDate(date);
      }}
      onActiveStartDateChange={handleChange}
      onViewChange={handleChange}
      prev2Label={null}
      next2Label={null}
      prevLabel={<MoveButton classname="rotate-180" />}
      nextLabel={<MoveButton />}
      tileClassName={({ date, view }) => {
        return `h-full w-full ${
          trainedDays.includes(date.getDate())
            ? "bg-success-500 hover:bg-success-700"
            : "bg-neutral-500 hover:bg-neutral-700"
        } text-center items-center justify-center border border-neutral-600 p-2`;
      }}
      minDetail={"year"}
      tileDisabled={({ date, view }) => {
        return view == "month" && date.getMonth() + 1 != currentMonth;
      }}
      // activeStartDate={new Date()}
      defaultActiveStartDate={new Date()}
    />
  );
}
