import List from "@/components/list/List";
import ListElement from "@/components/list/ListElementFunction";
import { useContext } from "react";
import { TrainingContext } from "../createTrainingContextProvider";
import { phases } from "@/libs/utils";

export default function SelectTemplate() {
  const { setPhase, setTemplate } = useContext(TrainingContext)!;

  const handleSelection = ({ id, name }: { id: number; name: string }) => {
    setTemplate({ id: id, name: name });
    setPhase(phases.Exercises);
  };
  return (
    <div className="h-full w-full flex items-center justify-center p-8 pt-32">
        <List<TrainingTemplate>
          tittle={"What workout will you do today?"}
          tittleSize="text-4xl"
          searchBy="name"
          url={"/trainingTemplates"}
          render={ListElement}
          functionButtons={handleSelection}
        ></List>
    </div>
  );
}

type TrainingTemplate = {
  id: number;
  name: string;
};
