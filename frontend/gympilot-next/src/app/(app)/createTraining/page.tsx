"use client";

import CreateSetsModal from "@/components/createTrainings/createTrainingPhases/createSets/CreateSetsModal";
import { TrainingProvider } from "@/components/createTrainings/createTrainingContextProvider";
import PhaseComponent from "@/components/createTrainings/PhaseComponent";

export default function CreateTrainingPage() {
  return (
    <TrainingProvider>
      <CreateSetsModal />
      <PhaseComponent />
    </TrainingProvider>
  );
}
