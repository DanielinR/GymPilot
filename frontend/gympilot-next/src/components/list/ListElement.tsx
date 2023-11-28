import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ListElement({ id, name }: { id:number, name: string }) {
  const pathname = usePathname();  
  
  return (
      <Link href={pathname + "/" + id} className="bg-color-secondary hover:bg-color-secondary-dark rounded-md flex items-center justify-center p-3 outline outline-1 shadow-2xl outline-color-info-back">
        <h2 className="text-color-font">{name}</h2>
      </Link>
    );
  }
  