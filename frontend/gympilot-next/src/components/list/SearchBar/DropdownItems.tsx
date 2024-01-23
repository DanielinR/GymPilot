import { useEffect, useState } from "react";
import { getFilterItems } from "./filterDropdownItems";

export default function DropDownItems({
  filter,
  selectFunction,
}: {
  filter: string;
  selectFunction: (item: any) => void;
}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function updateItems() {
      setItems(await getFilterItems(filter));
    }

    updateItems();
  }, [filter]);

  return (
    <>
      <ul
        className={`absolute top-7 left-1/2 -translate-x-1/2 z-40 rounded-b-lg flex flex-col items-center text-white bg-neutral-500 bg-opacity-95`}
      >
        {items.map((item:any) => {
          return (
            <button
              onClick={() => selectFunction(item)}
              key={item.name}
              className="hover:bg-neutral-700 p-2"
            >
              {item.name}
            </button>
          );
        })}
      </ul>
      <div
        onClick={() => {
          selectFunction("");
        }}
        className={`fixed top-0 left-0 z-30 fullheight w-screen`}
      ></div>
    </>
  );
}
