import DayInfo from "@/components/Home/DayInfo";
import InfoCard from "@/components/Home/InfoCard";
import Calendar from "@/components/calendar/Calendar";
import CalendarIcon from "@/components/svg/CalendarIcon";

export default function Home() {
  return (
    <div className="grid grid-rows-[7fr_2fr_3fr] lg:grid-rows-4 lg:grid-cols-[3fr_1fr_1fr] h-full w-full gap-8 p-8">
      <div className="lg:row-start-1 lg:row-end-4 bg-neutral-500 rounded-lg flex items-center justify-center flex-col bg-opacity-90">
        <div className="flex-1 flex items-center justify-center gap-2">
          <CalendarIcon className="h-10 w-10 text-white"></CalendarIcon>
          <h2 className="shadowText text-white text-2xl lg:text-4xl font-extrabold text-center flex items-center justify-center">
            TRAINING CALENDAR
          </h2>
        </div>
        <Calendar />
      </div>
      <InfoCard tittle="Kg lifted" info="44"></InfoCard>
      <InfoCard tittle="Consecutive days" info="44"></InfoCard>
      <InfoCard tittle="Trained days" info="44"></InfoCard>
      <InfoCard tittle="Kg lifted" info="44"></InfoCard>
      <InfoCard tittle="Consecutive days" info="44"></InfoCard>
      <InfoCard tittle="Trained days" info="44"></InfoCard>
      <DayInfo></DayInfo>
      <button className="shadowText bg-brand-500 hover:bg-brand-700 py-5 px-8 rounded-xl text-white text-4xl lg:text-5xl font-extrabold shadow-lg shadow-brand lg:col-start-2 lg:col-end-4 lg:m-0 lg:mb-0 mb-10 m-8">
        <h2>TRAIN</h2>
      </button>
    </div>
  );
}
