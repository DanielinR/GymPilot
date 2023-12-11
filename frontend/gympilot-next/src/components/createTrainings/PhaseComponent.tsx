import { useContext } from "react";
import SelectExercise from "./createTrainingPhases/SelectExercise";
import SelectTemplate from "./createTrainingPhases/SelectTemplate";
import WatchActualTraining from "./createTrainingPhases/WatchActualTraining/WatchActualTraining";
import CreateSets from "./createTrainingPhases/createSets/CreateSets";
import { TrainingContext } from "./createTrainingContextProvider";
import { phases } from "@/libs/utils";

export default function PhaseComponent() {
  const { phase } = useContext(TrainingContext)!;

  switch (phase) {
    case phases.TrainingTemplates:
      return <SelectTemplate />;
    case phases.WatchActualTraining:
      return <WatchActualTraining />;
    case phases.Exercises:
      return <SelectExercise />;
    case phases.Sets:
      return <CreateSets />;
    default:
      return null;
  }
}
