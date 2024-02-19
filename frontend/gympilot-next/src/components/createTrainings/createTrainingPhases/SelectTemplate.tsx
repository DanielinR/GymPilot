import List from "@/components/list/List";
import ListElement from "@/components/list/ListElementFunction";
import { useContext } from "react";
import { TrainingContext } from "../createTrainingContextProvider";
import { Template, phases } from "@/libs/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SelectTemplate() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { setPhase, setTemplate } = useContext(TrainingContext)!;

  const handleSelection = ({ id, name }: { id: number; name: string }) => {
    setTemplate({ id: id, name: name });
    
    const params = new URLSearchParams(searchParams);
    params.set("routine", name);
    router.replace(`${pathname}?${params.toString()}`);

    setPhase(phases.Exercises);
  };
  return (
    <div className="h-full w-full flex items-center p-5 pt-0">
        <List<Template>
          tittle={"Routine"}
          searchBy="name"
          url={"/trainingTemplates"}
          render={ListElement}
          functionButtons={handleSelection}
        ></List>
    </div>
  );
}
