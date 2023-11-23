import Calendar from '@/components/Calendar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col items-center h-full'>
      <Image className="m-16" alt='logo image' src={"/icon.png"} width={180} height={205}/>
      <Calendar/>
    </div>
  )
}
