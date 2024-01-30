import List from "@/components/list/List";
import ListElement from "@/components/list/ListElementFunction";
import { useContext } from "react";
import { TrainingContext } from "../createTrainingContextProvider";
import { Template, phases } from "@/libs/utils";

export default function SelectTemplate() {
  const { setPhase, setTemplate } = useContext(TrainingContext)!;

  const handleSelection = ({ id, name }: { id: number; name: string }) => {
    setTemplate({ id: id, name: name });
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
