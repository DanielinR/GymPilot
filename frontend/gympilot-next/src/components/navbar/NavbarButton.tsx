import { isMediumScreenOrLarger } from "@/libs/utils";
import GreaterThanIcon from "../svg/GreaterThanIcon";
import MenuIcon from "../svg/MenuIcon";
import useWindowDimensions from "@/libs/useWindowDimensions";

export default function NavbarButton({
  handleClick,
  isOpen,
}: {
  handleClick: VoidFunction;
  isOpen: Boolean;
}) {
  const { width, height } = useWindowDimensions();
  return (
    <div
      className={`absolute right-0 top-1 md:top-1/2 z-40 md:-translate-y-1/2 md:translate-x-8 translate-x-11 ${
        isOpen && !isMediumScreenOrLarger(width) && "hidden"
      }`}
    >
      <button
        onClick={handleClick}
        className="bg-neutral-700 rounded-full p-1 flex justify-center items-center hover:bg-color-primary"
      >
        {isMediumScreenOrLarger(width) ? (
          <GreaterThanIcon
            className={`icon ${!isOpen ? "rotate-180" : ""}`}
          ></GreaterThanIcon>
        ) : (
          <MenuIcon className="h-8 w-8"></MenuIcon>
        )}
      </button>
    </div>
  );
}

