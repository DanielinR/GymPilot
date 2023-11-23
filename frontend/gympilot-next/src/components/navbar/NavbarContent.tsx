import Link from "next/link";
import Image from 'next/image';

export default function NavbarContent({isOpen} : {isOpen: Boolean}){
    return(
        <div className={`flex flex-col gap-7 ${!isOpen ? "hidden" : ""}`}>
        <div className='flex items-center gap-4'>
          <Image alt='logo image' src={"/icon.png"} width={55} height={60}/>
          <h1 className='font-bold text-2xl'>Gym Pilot</h1>
        </div>
        <div className='flex flex-col gap-5 pl-4'>
          <Link className='' href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/about">About</Link>
          <Link href="/about">About</Link>
        </div>
        </div>
    );
}