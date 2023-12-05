import { phases } from "@/libs/utils";

export default function CreateTrainingTopper({ phase }: { phase: number }) {
  switch (phase) {
    case phases.Sets: {
      return (
        <div className="bg-color-info-back h-20 w-48 rounded-md -translate-y-2 p-4 flex items-center justify-center font-bold">
          <span className="text-4xl">1:35</span>
        </div>
      );
    }
  }
}
