import { Group } from "@visx/group";
import { Pie } from "@visx/shape";
import { useState } from "react";
import AnimatedPie from "../Charts/AnimatedPie";
import { chartColors } from "@/libs/utils";

const colors_500 = chartColors.slice().reverse();
const colors_400 = chartColors.slice().reverse();

type ChartData = {
  label: string;
  value: number;
};
export default function PieChart({
  data,
  width,
  height,
  datatitle,
}: {
  data: ChartData[];
  width: number;
  height: number;
  datatitle?: string;
}) {
  const [activeSection, setActiveSection] = useState<ChartData | null>(null);
  const getColor = (label: string) => {
    const index = data.findIndex((item) => item.label === label);
    return activeSection && activeSection.label === label
      ? colors_400[index]
      : colors_500[index];
  };

  const half = width / 2;
  const arcWith = width / 6;
  const arcActiveIncrement = 5;
  const arcSeparations = 0.04;
  const cornerRadius = 3;
  const totalValue = data.reduce((total, actual) => total + actual.value, 0);
  return (
    <>
      <svg width={width} height={height} className="overflow-visible">
        <Group top={half} left={half}>
          <Pie
            data={data}
            pieValue={(data) => data.value}
            outerRadius={({ data }) => {
              const size =
                half -
                (activeSection && activeSection.label == data.label
                  ? 0
                  : arcActiveIncrement);
              return size;
            }}
            innerRadius={({ data }) => {
              const size =
                half -
                arcWith -
                (activeSection && activeSection.label == data.label
                  ? arcActiveIncrement
                  : 0);
              return size;
            }}
            padAngle={arcSeparations}
            cornerRadius={cornerRadius}
          >
            {(pie) => (
              <AnimatedPie
                {...pie}
                animate={true}
                getKey={(arc) => arc.data.label}
                onClickDatum={(data) =>
                  setActiveSection(
                    activeSection && activeSection === data.data
                      ? null
                      : data.data
                  )
                }
                getColor={(arc) => getColor(arc.data.label)}
              />
            )}
          </Pie>
        </Group>
      </svg>
      { datatitle &&
        <div className="flex flex-col shadowText text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[50% - 0px]">
          <span className="text-3xl">
            {activeSection
              ? ((activeSection.value / totalValue) * 100).toFixed(1) + "%"
              : totalValue.toFixed(2)}
          </span>
          <span className="text-3xl">{activeSection ? "" : datatitle}</span>
          <span className="text-xl">
            {activeSection ? activeSection.value.toFixed(2) + " " + datatitle : ""}
          </span>
        </div>
      }
    </>
  );
}
