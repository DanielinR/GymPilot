"use client";

import React, { createContext, useState, ReactNode, useEffect } from "react";
import { phases, Template, ExerciseTrain, Exercise } from "@/libs/utils";
import { getWeightFromExercise } from "@/libs/data";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type TrainingContextType = {
  phase: number;
  setPhase: (phase: number) => void;
  template: Template | undefined;
  setTemplate: (template: Template) => void;
  actualExercise: Exercise | undefined;
  setActualExercise: (exercise: Exercise) => void;
  viewModal: boolean;
  setViewModal: (view: boolean) => void;
  actualWeight: number | undefined;
  setActualWeight: (weight: number) => void;
  actualReps: number | undefined;
  setActualReps: (reps: number | undefined) => void;
  exercises: ExerciseTrain[];
  setExercises: (exercises: ExerciseTrain[]) => void;
  router: AppRouterInstance;
};
export const TrainingContext = createContext<TrainingContextType | undefined>(
  undefined
);

export function TrainingProvider({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState(phases.TrainingTemplates);
  const [template, setTemplate] = useState<Template>();
  const [actualExercise, setActualExercise] = useState<Exercise>();
  const [viewModal, setViewModal] = useState(false);
  const [actualWeight, setActualWeight] = useState<number>();
  const [actualReps, setActualReps] = useState<number>();
  const [exercises, setExercises] = useState<ExerciseTrain[]>([]);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    function updateTemplateFilter() {
      const params = new URLSearchParams(searchParams);
      if (!template || phase != phases.Exercises) {
        params.delete("template");
      }else{
        params.set("template", template.name);
      }
      router.replace(`${pathname}?${params.toString()}`);
    }
    async function updateWeight() {
      if (!actualExercise || phase != phases.Sets) {
        return;
      }
      const newWeight = await getWeightFromExercise(actualExercise?.id);
      setActualWeight(newWeight);
      if (newWeight == null) {
        setViewModal(true);
      }
    }
    updateWeight();
    updateTemplateFilter();
  }, [actualExercise, template, phase]);

  const value = {
    phase,
    setPhase,
    template,
    setTemplate,
    actualExercise,
    setActualExercise,
    viewModal,
    setViewModal,
    actualWeight,
    setActualWeight,
    actualReps,
    setActualReps,
    exercises,
    setExercises,
    router,
  };

  return (
    <TrainingContext.Provider value={value}>
      {children}
    </TrainingContext.Provider>
  );
}
