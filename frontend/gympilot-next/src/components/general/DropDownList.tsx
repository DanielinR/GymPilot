import { useState } from "react";
import DropDownItems from "../list/SearchBar/DropdownItems";
import DisplayIcon from "../svg/DisplayIcon";

export default function DropDownList({
  listName,
  selectedItem,
  select,
}: {
  listName: string;
  selectedItem?: string;
  select: (item: any) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {isOpen && (
        <DropDownItems
          filter={listName}
          selectFunction={(selection: any) => {
            setIsOpen(false);
            if (!selection) return;
            select(selection);
          }}
        ></DropDownItems>
      )}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex items-center bg-neutral-600 rounded-lg pl-2"
      >
        <span className="font-light pr-1">{selectedItem}</span>
        <div
          className={`flex-grow pl-1 pr-2 py-1 hover:bg-neutral-700 rounded-r-lg h-full`}
        >
          <DisplayIcon className="w-5 h-5"></DisplayIcon>
        </div>
      </button>
    </div>
  );
}
