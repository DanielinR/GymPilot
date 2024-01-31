import ArrowIcon from "../svg/ArrowIcon";

export default function MoveButton({ classname = "" }: { classname?: string }) {
    return(
        <ArrowIcon
          className={
            "h-8 w-8 p-1 bg-brand-500 hover:bg-brand-700 shadow-md rounded-full " +
            classname
          }
        ></ArrowIcon>
    );
}
