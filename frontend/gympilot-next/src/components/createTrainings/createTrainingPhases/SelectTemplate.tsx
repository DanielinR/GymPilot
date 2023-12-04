import List from "@/components/list/List";
import ListElement from "@/components/list/ListElementFunction";

export default function SelectTemplate(handleSelection: Function) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-14 pb-22">
      <div className="h-fit w-full flex items-center justify-center">
        <List<TrainingTemplate>
          tittle={"What workout will you do today?"}
          searchBy="name"
          url={"/trainingTemplates"}
          render={ListElement}
          functionButtons={handleSelection}
        ></List>
      </div>
    </div>
  );
}

type TrainingTemplate = {
  id: number;
  name: string;
};
