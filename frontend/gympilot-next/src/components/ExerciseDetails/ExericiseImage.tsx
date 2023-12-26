import Image from "next/image";
import EditIcon from "../svg/EditIcon";
import { Exercise } from "@/libs/utils";

export default function ExerciseImage({exerciseInfo, setviewIconSelection}:{  exerciseInfo: Exercise | undefined; setviewIconSelection:Function}) {
  return (
    <div className="relative w-60 z-10">
      <Image
        alt={"Exercise name"}
        className="rounded-full border-4 border-brand-500 shadow-xg h-auto w-full"
        src={"/exercisesLogos/" + (exerciseInfo ? exerciseInfo.icon : "default.png")}
        width={330}
        height={330}
      ></Image>
      <button onClick={()=>{setviewIconSelection(true)}} className="bg-brand-600 hover:bg-brand-800 shadow-2xl flex items-center justify-center z-10 absolute bottom-0 right-0 rounded-full p-3">
        <EditIcon className="h-8 w-8"></EditIcon>
      </button>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full -z-10">
        <Image src="/eclipse.svg" alt="shadow" width={325} height={6} />
      </div>
    </div>
  );
}
