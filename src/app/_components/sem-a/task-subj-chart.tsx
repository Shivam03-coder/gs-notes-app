"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

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

const chartData = [
  { subject: "Mathematics", value: 320, fill: "#FF6384" }, // Red
  { subject: "Physics", value: 270, fill: "#36A2EB" }, // Blue
  { subject: "Engg. Graphics", value: 310, fill: "#FFCE56" }, // Yellow
];

const chartConfig = {
  Mathematics: {
    label: "Mathematics",
    color: "#FF6384",
  },
  Physics: {
    label: "Physics",
    color: "#36A2EB",
  },
  "Engg. Graphics": {
    label: "Engineering Graphics",
    color: "#FFCE56",
  },
} satisfies ChartConfig;

function TaskSubjectChart() {
  const total = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0);
  }, []);

  return (
    <Card className="bg-white text-primary max-w-sm ">
      <CardHeader className="items-center pb-0">
        <CardTitle>Subjects Distribution</CardTitle>
        <CardDescription className="text-primary">
          Semester January - June 2024
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent className="bg-primary text-primary" hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="subject"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {total.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default TaskSubjectChart;
