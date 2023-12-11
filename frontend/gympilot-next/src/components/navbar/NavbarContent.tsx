import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavbarContent({ isOpen, selectOption }: { isOpen: Boolean, selectOption:Function}) {
  return (
    <div className={`flex flex-col gap-7 ${!isOpen ? "hidden" : ""}`}>
      <div className="flex items-center gap-4">
        <Image alt="logo image" src={"/icon.png"} width={55} height={60} />
        <h1 className="font-bold text-2xl">Gym Pilot</h1>
      </div>
      <div className="flex flex-col gap-2 pl-4">
        <NavbarLink tittle="Home" link="/" selectOption={selectOption}></NavbarLink>
        <NavbarLink tittle="Exercises" link="/exercises" selectOption={selectOption}></NavbarLink>
        <NavbarLink tittle="Add training" link="/createTraining" selectOption={selectOption}></NavbarLink>
      </div>
    </div>
  );
}

function NavbarLink({ tittle, link, selectOption }: { tittle: string; link: string, selectOption:Function }) {
  const pathname = usePathname();

  return (
    <Link
      onClick={()=>{selectOption()}}
      className={`${pathname == link ? "bg-color-primary" : ""}  hover:bg-color-primary mr-8 p-3 rounded-xl`}
      href={link}
    >
      {tittle}
    </Link>
  );
}
