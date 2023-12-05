import List from "@/components/list/List";
import ListElement from "@/components/list/ListElementFunction";
import { ExerciseTrain } from "@/libs/utils";
import ExerciseBox from "./ExerciseBox";

export default function SelectExercise(
  idTemplate: number,
  handleSelection: Function,
  exercises: ExerciseTrain[]
) {
  const exercises2=[{exercise:{id :1, name:"pres banca"}, sets:[{reps:11,weight:11},{reps:11,weight:11},{reps:11,weight:11}]},{exercise:{id :2, name:"pres banca"}, sets:[{reps:11,weight:11},{reps:11,weight:11},{reps:11,weight:11}]},{exercise:{id :3, name:"pres banca"}, sets:[{reps:11,weight:11},{reps:11,weight:11},{reps:11,weight:11}]},{exercise:{id :1, name:"pres banca"}, sets:[{reps:11,weight:11},{reps:11,weight:11},{reps:11,weight:11}]},{exercise:{id :2, name:"pres banca"}, sets:[{reps:11,weight:11},{reps:11,weight:11},{reps:11,weight:11}]},{exercise:{id :3, name:"pres banca"}, sets:[{reps:11,weight:11},{reps:11,weight:11},{reps:11,weight:11}]}]
  return (
    <div className="h-full w-full flex flex-col items-center justify-evenly">
        <div className=" w-[90%] flex items-center gap-3 flex-wrap justify-center">{exercises2.map((item) => {
          return(<ExerciseBox key={item.exercise.id} exerciseTrain={item}/>);
        })}</div>
      <div className="h-fit w-full flex items-center justify-center">
        <List<Exercise>
          tittle={"What exercise do you want to do now?"}
          tittleSize="text-3xl"
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
