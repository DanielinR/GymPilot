import DayInfo from '@/components/Home/DayInfo'
import InfoCard from '@/components/Home/InfoCard'
import Calendar from '@/components/calendar/Calendar'

export default function Home() {
  return (
    <div className='grid grid-rows-[7fr_2fr_3fr] lg:grid-rows-4 lg:grid-cols-[3fr_1fr_1fr] h-full w-full gap-8 p-8 xl:gap-14 xl:p-14'>
      <div className='lg:row-start-1 lg:row-end-4 bg-neutral-500 rounded-lg flex items-center justify-center flex-col bg-opacity-90'>
        <h2 className='text-white text-2xl lg:text-4xl font-extrabold text-center flex-1 flex items-center justify-center'>TRAINING CALENDAR</h2>
        <Calendar />
      </div>
      <InfoCard tittle='Kg lifted' info="44"></InfoCard>
      <InfoCard tittle='Consecutive days' info="44"></InfoCard>
      <InfoCard tittle='Trained days' info="44"></InfoCard>
      <InfoCard tittle='Kg lifted' info="44"></InfoCard>
      <InfoCard tittle='Consecutive days' info="44"></InfoCard>
      <InfoCard tittle='Trained days' info="44"></InfoCard>
      <div className='bg-neutral-500 rounded-lg bg-opacity-90 flex text-white'>
        <DayInfo></DayInfo>
      </div>
      <button className='bg-brand-500 hover:bg-brand-700 py-5 px-8 rounded-xl text-white text-4xl lg:text-5xl font-extrabold shadow-lg shadow-brand lg:col-start-2 lg:col-end-4 lg:m-0 lg:mb-0 mb-10 m-8'>
        <h2>TRAIN</h2>
      </button>
    </div>
  )
}
