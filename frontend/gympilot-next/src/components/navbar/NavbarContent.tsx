import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import HomeIcon from "../svg/HomeIcon";
import DumbellIcon from "../svg/DumbellIcon";
import LogoWithLetters from "../LogoWithLetters";
import Image from "next/image";

export default function NavbarContent({ isOpen, selectOption }: { isOpen: Boolean, selectOption: Function }) {
  return (
    <div className={`flex flex-col gap-9 ${!isOpen ? "hidden md:flex" : ""}`}>
      <div className={`flex items-center gap-4 ${isOpen ? "" : "justify-center mt-5"}`}>
        {isOpen && <LogoWithLetters></LogoWithLetters>}
        {!isOpen && <Image alt="logo image" src={"/icon.png"} width={40} height={50} />}
      </div>
      <div className="flex flex-col gap-2">
        <NavbarLink tittle={isOpen ? "Home" : ""} link="/" selectOption={selectOption} SvgIcon={HomeIcon}></NavbarLink>
        <NavbarLink tittle={isOpen ? "Exercises" : ""} link="/exercises" selectOption={selectOption} SvgIcon={DumbellIcon}></NavbarLink>
        <NavbarLink tittle={isOpen ? "Add training" : ""} link="/createTraining" selectOption={selectOption} SvgIcon={HomeIcon}></NavbarLink>
      </div>
    </div>
  );
}

function NavbarLink({ tittle, link, selectOption, SvgIcon }: { tittle: string; link: string, selectOption: Function, SvgIcon: ({ className }: { className: string; }) => ReactNode; }) {
  const pathname = usePathname();

  return (
    <Link
      className={`flex items-center gap-3 ${pathname == link ? "bg-neutral-700" : ""}  hover:bg-neutral-800 py-3 px-4 rounded-xl`}
      onClick={() => { selectOption() }}
      href={link}
    >
      <SvgIcon className="h-6 w-6 text-white fill-white"></SvgIcon>
      {tittle}
    </Link>
  );
}
