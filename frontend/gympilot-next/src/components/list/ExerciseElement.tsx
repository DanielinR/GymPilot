import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ExerciseElement({
  id,
  name,
  type,
  last_weight,
  icon
}: {
  id: number;
  name: string;
  type: string;
  last_weight: number;
  icon:string;
}) {
  const pathname = usePathname();
  
  return (
    <Link href={pathname + "/" + id} className="relative h-[12.5rem] flex w-full border-opacity-20 p-2 border-neutral-500 border-2 rounded-lg bg-neutral-800 bg-opacity-10 hover:bg-opacity-30">
      <Image
        alt={name}
        className="rounded-full border-2 border-brand-500 absolute left-1/2 -translate-x-1/2 z-20 shadow-xl"
        src={"/exercisesLogos/" + icon}
        width={100}
        height={100}
      ></Image>
      <div className="absolute top-[95px] left-1/2 -translate-x-1/2 z-10 rounded-full">
        <Image src="/eclipse.svg" alt="shadow" width={95} height={5} />
      </div>
      <div className="h-32 text-center text-white absolute top-[70px] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center w-full bg-neutral-500 hover:bg-neutral-700 bg-opacity-95 p-3 pt-7 rounded-lg gap-1">
        <div className="text-sm font-bold">{name.toUpperCase()}</div>
        <div className="text-xs font-light text-gray-300">{type}</div>
      </div>
    </Link>
  );
}
