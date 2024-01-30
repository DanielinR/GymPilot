
function CalendarDay({ day, trained = false, exist = false, selectDay = () => {} }: { day: number, trained?: boolean, exist?: boolean, selectDay?:Function }) {
    let background: string;
    background = trained ? "bg-brand-500 hover:bg-brand-700" : "bg-neutral-700 hover:bg-neutral-700";
    return (
        <button onClick={() => {selectDay(day)}} 
        className={(exist ? background : "bg-neutral-700") + " text-center flex items-center justify-center rounded-md border-2 border-neutral-500 shadow-lg"}>
            <p className={`${trained ? "text-brand-900" : ""} flex items-center justify-center text-center text-lg font-normal`}>{exist ? day : ""}</p>
        </button>
    )
}

export default CalendarDay
