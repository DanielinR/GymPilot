
function CalendarDay({ day, trained = false, exist = false }: { day: number, trained?: boolean, exist?: boolean }) {
    let background: string;
    background = trained ? "bg-brand-500" : "bg-neutral-700";
    return (
        <div className={(exist ? background : "bg-neutral-600") + " text-center flex items-center justify-center rounded-md border-2 border-neutral-500"}>
            <p className={`${trained ? "text-brand-900" : ""} flex items-center justify-center text-center text-lg font-normal`}>{exist ? day : ""}</p>
        </div>
    )
}

export default CalendarDay
