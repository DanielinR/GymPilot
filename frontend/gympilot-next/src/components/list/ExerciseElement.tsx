import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DumbellIcon from "../svg/DumbellIcon";

export default function ExerciseElement({
  id,
  name,
  type,
  last_weight,
}: {
  id: number;
  name: string;
  type: number;
  last_weight: number;
}) {
  const pathname = usePathname();
  return (
    <Link
      href={pathname + "/" + id}
      className="relative rounded-md flex flex-col items-center justify-between p-2 shadow-2xl bg-color-primary-strong h-full text-center gap-1"
    >
      <div className="absolute top-0 right-0 flex flex-col items-center justify-center bg-color-secondary-dark rounded-full h-10 w-10 p-1">
        <span className="text-color-font z-10 font-bold rounded-full text-xs">
          {last_weight ? last_weight : "-"}
        </span>
        <DumbellIcon className=""></DumbellIcon>
      </div>
      <Image
        alt={name}
        className="rounded-md"
        src={"/exercisesLogos/benchPres.png"}
        width={100}
        height={100}
      ></Image>
      <div className="flex gap-2 flex-grow flex-col w-full items-center overflow-hidden text-ellipsis">
        <h2 className="flex-1 flex items-center justify-center text-color-font font-bold text-sm">{name}</h2>
        <span className="text-color-font text-xs font-light h-5 bg-color-primary rounded-full p-1">{type}</span>
      </div>
    </Link>
  );
}
