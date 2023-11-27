import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavbarContent({ isOpen }: { isOpen: Boolean }) {
  return (
    <div className={`flex flex-col gap-7 ${!isOpen ? "hidden" : ""}`}>
      <div className="flex items-center gap-4">
        <Image alt="logo image" src={"/icon.png"} width={55} height={60} />
        <h1 className="font-bold text-2xl">Gym Pilot</h1>
      </div>
      <div className="flex flex-col gap-2 pl-4">
        <NavbarLink tittle="Home" link=""></NavbarLink>
        <NavbarLink tittle="Exercises" link="/exercises"></NavbarLink>
      </div>
    </div>
  );
}

function NavbarLink({ tittle, link }: { tittle: string; link: string }) {
  const pathname = usePathname();

  return (
    <Link
      className={`${pathname == "/"+link ? "bg-color-primary" : ""}  hover:bg-color-primary mr-8 p-3 rounded-xl`}
      href={"/" + link}
    >
      {tittle}
    </Link>
  );
}
