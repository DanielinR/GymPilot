
function CalendarDay({day, trained = false, exist = false} : {day: number, trained?: boolean,  exist?: boolean}) {
    let background: string;
    background = trained ? "color-secondary" : "color-primary";
    return (
        <div className={(exist ? "bg-" + background : "bg-gray-300") + " text-center flex items-center justify-center rounded-md w-10 h-10"}>
            <p className="flex items-center justify-center text-center text-xl">{exist ? day : ""}</p>
        </div>
    )
  }
  
  export default CalendarDay
  