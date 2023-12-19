import ArrowIcon from '@/components/svg/ArrowIcon'

export default function DayInfo() {
    return (
        <>
            <div className='flex flex-col items-center justify-between flex-[4]'>
                <span className='flex flex-1 items-center justify-center text-xl'>December 11h</span>
                <span className='flex flex-[2] items-center justify-center text-2xl bg-neutral-700 rounded-bl-lg w-full'>Push</span>
            </div>
            <button className='flex-1 bg-brand-500 hover:bg-brand-700 rounded-r-lg flex items-center justify-center shadow-2xl'><ArrowIcon className='h-10 w-10 md:w-20 md:h-20 text-white'></ArrowIcon></button>
        </>
    );
}