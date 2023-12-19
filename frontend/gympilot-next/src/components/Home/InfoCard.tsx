import { title } from "process";

export default function InfoCard({info, tittle} : {tittle:string, info:string}) {
    return (
        <div className="flex-col gap-3 items-center shadow-lg justify-center bg-neutral-500 bg-opacity-90 rounded-lg hidden lg:flex">
            <h2 className="font-extrabold text-xl lg:text-2xl text-brand-500 text-center">{tittle}</h2>
            <h2 className="font-extrabold text-xl lg:text-2xl text-white text-center">{info}</h2>
        </div>
    );
}