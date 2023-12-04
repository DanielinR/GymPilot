import List from "@/components/list/List";
import ListElement from "@/components/list/ListElementFunction";

export default function SelectExercise(
  idTemplate: number,
  handleSelection: Function
) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-14 pb-22">
      <div className="h-fit w-full flex items-center justify-center">
        <List<Exercise>
          tittle={"What exercise do you want to do now?"}
          searchBy="name"
          url={"/trainingTemplates/" + idTemplate}
          jsonParam="exercises"
          render={ListElement}
          functionButtons={handleSelection}
        ></List>
      </div>
    </div>
  );
}

type Exercise = {
  id: number;
  name: string;
};
