"use client";

import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const syllabusData = [
  { subject: "Mathematics", syllabusCovered: 85 },
  { subject: "Physics", syllabusCovered: 75 },
  { subject: "Chemistry", syllabusCovered: 80 },
  { subject: "Graphics", syllabusCovered: 90 },
  { subject: "Civil Engineering", syllabusCovered: 70 },
];

const chartConfig = {
  syllabusCovered: {
    label: "Syllabus Covered",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function SyllabusRadarChart() {
  return (
    <Card className="max-w-sm bg-white text-primary">
      <CardHeader className="items-center pb-4">
        <CardTitle>Syllabus Coverage</CardTitle>
        <CardDescription className="text-primary">
          Percentage of syllabus covered
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={syllabusData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent className="bg-primary text-secondary" />}
            />
            <PolarAngleAxis dataKey="subject" />
            <PolarGrid />
            <Radar dataKey="syllabusCovered" fill="#F72C5B" fillOpacity={0.6} />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default SyllabusRadarChart;
