import React from "react";
import { Group } from "@visx/group";
import { scaleLinear } from "@visx/scale";
import { Point } from "@visx/point";
import { Line, LineRadial } from "@visx/shape";
import { useLoaded } from "@/libs/useLoaded";
import { Text } from "@visx/text";

const brandColor_back = "#036457";
export const brandColor = "#56E8D5";
const silver = "#d9d9d9";
export const background = "rgba(0, 0, 0, 0.0)";
// export const background = "rgba(0, 0, 0, 0.2)";

const degrees = 360;

const genAngles = (length: number) =>
  [...new Array(length + 1)].map((_, i) => ({
    angle:
      i * (degrees / length) + (length % 2 === 0 ? 0 : degrees / length / 2),
  }));

const genPoints = (length: number, radius: number) => {
  const step = (Math.PI * 2) / length;
  return [...new Array(length)].map((_, i) => ({
    x: radius * Math.sin(i * step),
    y: radius * Math.cos(i * step),
  }));
};

function genPolygonPoints<Datum>(
  dataArray: Datum[],
  scale: (n: number) => number,
  getValue: (d: Datum) => number
) {
  const step = (Math.PI * 2) / dataArray.length;
  const points: { x: number; y: number }[] = new Array(dataArray.length).fill({
    x: 0,
    y: 0,
  });
  const pointString: string = new Array(dataArray.length + 1)
    .fill("")
    .reduce((res, _, i) => {
      if (i > dataArray.length) return res;
      const xVal = scale(getValue(dataArray[i - 1])) * Math.sin(i * step);
      const yVal = scale(getValue(dataArray[i - 1])) * Math.cos(i * step);
      points[i - 1] = { x: xVal, y: yVal };
      res += `${xVal},${yVal} `;
      return res;
    });

  return { points, pointString };
}

const defaultMargin = { top: 39, left: 39, right: 39, bottom: 39 };

type RadarData = {
  label: string;
  value: number;
};

export type RadarProps = {
  data: RadarData[];
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  levels?: number;
};

export default function RadarChart({
  data,
  width,
  height,
  levels = 5,
  margin = defaultMargin,
}: RadarProps) {
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;
  const radius = Math.min(xMax, yMax) / 2;
  const loaded = useLoaded();

  const radialScale = scaleLinear<number>({
    range: [0, Math.PI * 2],
    domain: [degrees, 0],
  });

  const yScale = scaleLinear<number>({
    range: [0, radius],
    domain: [0, Math.max(...data.map((d: RadarData) => d.value))],
  });

  const webs = genAngles(data.length);
  const points = genPoints(data.length, radius);
  const polygonPoints = genPolygonPoints(
    data,
    (d) => yScale(d) ?? 0,
    (d: RadarData) => d.value
  );
  const zeroPoint = new Point({ x: 0, y: 0 });

  return width < 10 ? null : (
    <svg width={width} height={height}>
      <rect fill={background} width={width} height={height} rx={14} />
      <Group top={height / 2} left={width / 2}>
        {[...new Array(levels)].map((_, i) => (
          <LineRadial
            key={`web-${i}`}
            data={loaded ? webs : []}
            angle={(d) => radialScale(d.angle) ?? 0}
            radius={((i + 1) * radius) / levels}
            fill="none"
            stroke={loaded ? silver : ""}
            strokeWidth={2}
            strokeOpacity={0.8}
            strokeLinecap="round"
          />
        ))}
        {[...new Array(data.length)].map((_, i) => 
            {
              const directionVector:{x:number,y:number} = {x:(points[i].x - zeroPoint.x),y:(points[i].y - zeroPoint.y)};
            return <Group key={`radar-axis-${i}`}>
              <Line
                key={`radar-line-${i}`}
                from={zeroPoint}
                to={loaded ? points[i] : {}}
                stroke={silver}
              />
              <Text
                className="font-bold shadow-2xl"
                fill={"white"}
                x={loaded ? points[i].x - 25 + directionVector.x/9: 0}
                y={loaded ? points[i].y + 4 + directionVector.y/4.8 : 0}
              >
                {data[i].label}
              </Text>
            </Group>}
        )}
        <polygon
          points={loaded ? polygonPoints.pointString : ""}
          fill={brandColor_back}
          fillOpacity={0.2}
          stroke={brandColor_back}
          strokeWidth={1}
        />
        {polygonPoints.points.map((point, i) => {
          return (
            <Group key={`radar-data-${i}`}>
              <circle
                key={`radar-point-${i}`}
                cx={loaded ? point.x : 0}
                cy={loaded ? point.y : 0}
                r={4}
                fill={brandColor}
              />
              <Text
                className="font-bold shadow-2xl shadow-brand-500"
                fill={brandColor}
                x={loaded ? point.x + 6 : 0}
                y={loaded ? point.y - 6 : 0}
              >
                {data[i].value}
              </Text>
            </Group>
          );
        })}
      </Group>
    </svg>
  );
}
