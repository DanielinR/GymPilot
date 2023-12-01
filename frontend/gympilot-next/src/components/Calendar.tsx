"use client";

import React, { useState, useEffect} from 'react';
import Image from 'next/image';
import CalendarDay from "./Calendar-day"
import { calculateDaysInMonth } from '@/libs/utils'; "../libs/utils"
import { getMonthTrainings } from '@/libs/data';

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [daysInMonth, setdaysInMonth] = useState(0);
  const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  const [trainedDays, setTrainedDays] = useState<number[]>([])

  useEffect(() => {
    async function updateTrainedDays() {
      setTrainedDays(await getMonthTrainings(currentMonth, currentYear));
    };
    
    setdaysInMonth(calculateDaysInMonth(currentMonth));
    updateTrainedDays();
  }, [currentMonth, currentYear]);

  function handleMonthsClick(sum:number) {
    let month:number = currentMonth + sum;
    if(month == 13){month = 1; setCurrentYear(currentYear + 1)};
    if(month == 0){month = 12; setCurrentYear(currentYear - 1)};
    setCurrentMonth(month);  
  }

  return (
    <div className="bg-color-info-back text-color-font shadow-md rounded-md p-5 flex flex-col justify-center items-center">
      <div className='flex items-center justify-between w-full mb-7'>
        <button onClick={() => {handleMonthsClick(-1)}}>
         <Image width={30} height={30} src={"/arrow.png"} alt='previous month' className='bg-color-secondary scale-x-[-1] shadow-md rounded-full'></Image>
        </button>
        <h2 className="bg-color-primary-strong px-2.5 py-1.5 rounded-full text-xl w-32 text-center">{monthNames[currentMonth - 1]}</h2>
        <button onClick={() => {handleMonthsClick(+1)}}>
          <Image width={30} height={30} src={"/arrow.png"} alt='next month' className='bg-color-secondary shadow-md rounded-full'></Image>
        </button>
      </div>
      <div className="grid grid-cols-7 grid-rows-6 gap-2.5">
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
              />
          ))}
      </div>
    </div>
  )
}

function DayTittle({children} : {children:string}) {
  return (
    <div className='flex items-center justify-center'>
      <p className='text-center flex items-center justify-center bg-color-primary-strong rounded-full w-8 h-8 text-xs'>{children}</p>
    </div>
  );
}

export default Calendar
  