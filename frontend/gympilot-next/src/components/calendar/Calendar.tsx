"use client";

import React, { useState, useEffect} from 'react';
import { monthNames } from '@/libs/utils';
import CalendarDay from "./Calendar-day"
import { calculateDaysInMonth } from '@/libs/utils'; "../libs/utils"
import { getMonthTrainings } from '@/libs/data';
import ArrowIcon from '../svg/ArrowIcon';

function Calendar({setSelectedDate = ()=>{}}:{setSelectedDate?:Function}) {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [daysInMonth, setdaysInMonth] = useState(0);
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  const [trainedDays, setTrainedDays] = useState<number[]>([])

  useEffect(() => {
    async function updateTrainedDays() {
      setTrainedDays(await getMonthTrainings(currentMonth, currentYear));
    };
    setdaysInMonth(calculateDaysInMonth(currentMonth, currentYear));
    updateTrainedDays();
  }, [currentMonth, currentYear]);

  function handleMonthsClick(sum:number) {
    let month:number = currentMonth + sum;
    if(month == 13){month = 1; setCurrentYear(currentYear + 1)};
    if(month == 0){month = 12; setCurrentYear(currentYear - 1)};
    setCurrentMonth(month);  
  }
  function selectDay(day:number) {
    setSelectedDate({day: day, month: currentMonth, year: currentYear})
  }

  return (
    <div className="text-white flex flex-col justify-center items-center flex-[4] p-5 w-full bg-neutral-500 bg-opacity-90 rounded-lg ">
      <div className='flex items-center justify-evenly w-full'>
        <button onClick={() => {handleMonthsClick(-1)}}>
        <ArrowIcon className='h-9 w-9 md:h-12 md:w-12 p-1 bg-brand-500 hover:bg-brand-700 shadow-md rounded-full rotate-180'></ArrowIcon>
        </button>
        <div>
          <h2 className="shadowText text-2xl w-32 text-center">{monthNames[currentMonth - 1]}</h2>
          <h2 className="shadowText text-center font-normal text-normal">{currentYear}</h2>
        </div>
        <button onClick={() => {handleMonthsClick(+1)}}>
          <ArrowIcon className='h-9 w-9 p-1 md:h-12 md:w-12 bg-brand-500 hover:bg-brand-700 shadow-md rounded-full'></ArrowIcon>
        </button>
      </div>
      <div className="grid grid-cols-7 grid-rows-6 gap-1 md:gap-2 flex-1 w-full pt-5">
        {dayNames.map((day, index) => {
          return (
          <DayTittle key={day}>{day}</DayTittle>
          )
        })}
        {Array.from({ length: 31 }, (_, index) => (
              <CalendarDay 
                  key={index + 1} 
                  day={index + 1} 
                  trained={trainedDays ? trainedDays.includes(index + 1) : false}
                  exist={index < daysInMonth} 
                  selectDay={selectDay}
              />
          ))}
      </div>
    </div>
  )
}

function DayTittle({children} : {children:string}) {
  return (
    <div className='flex items-center justify-center'>
      <p className='text-center flex items-center justify-center bg-neutral-800 rounded-full w-8 h-8 md:h-14 md:w-14 text-xs md:text-base'>{children}</p>
    </div>
  );
}

export default Calendar
  