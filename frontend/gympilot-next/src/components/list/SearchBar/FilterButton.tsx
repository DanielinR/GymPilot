import DisplayIcon from "@/components/svg/DisplayIcon";
import XIcon from "@/components/svg/XIcon";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import DropDownItems from "./DropdownItems";

export default function FilterButton({ filter }: { filter: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [value, setValue] = useState(
    searchParams.get(filter)?.toString() || ""
  );
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setValue(searchParams.get(filter)?.toString() || "");
  }, [pathname, searchParams, filter]);

  const selectOpt = (option: { name: string }) => {
    setIsOpen(false);
    setValue(option.name);
    const params = new URLSearchParams(searchParams);
    if (!option.name) return;
    params.set(filter, option.name);
    replace(`${pathname}?${params.toString()}`);
  };
  const unselectOpt = () => {
    setValue("");
    const params = new URLSearchParams(searchParams);
    params.delete(filter);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div
      className={`rounded-full flex items-center justify-between relative ${
        value ? "bg-brand-500" : "bg-neutral-500"
      } text-white h-7`}
    >
      <button
        className="flex-grow  pl-4 pr-1 rounded-l-full py-1"
        onClick={() => {
          !value && setIsOpen(!isOpen);
        }}
      >
        {value ? value : filter}
      </button>
      <button
        className={`flex-grow pl-1 pr-2 py-1 ${
          value ? "hover:bg-brand-700" : "hover:bg-neutral-700"
        } rounded-r-full h-full`}
        onClick={() => {
          if (value) {
            unselectOpt();
          } else {
            setIsOpen(!isOpen);
          }
        }}
      >
        {!value && <DisplayIcon className="w-5 h-5"></DisplayIcon>}
        {value && <XIcon className="w-4 h-4"></XIcon>}
      </button>
      {isOpen && (
        <DropDownItems
          filter={filter}
          selectFunction={selectOpt}
        ></DropDownItems>
      )}
    </div>
  );
}
