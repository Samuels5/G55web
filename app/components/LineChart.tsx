"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/loans/components/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/loans/components/chart";
import { getRandomInvestementData } from "../back/Invest";
import { useEffect, useState } from "react";
interface arr {
  time: string;
  value: number;
}
const token =
  "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJsc2FqZGxzanNuIiwiaWF0IjoxNzI0MTU1NzkzLCJleHAiOjE3MjQyNDIxOTN9.wi7oRgF81zMp1v8tPzRPmAj4GOLaYy4bV_TMVvtWmzg2mjrTThiruT_Fswcyu1eq";

interface info {
  totalInvestment: number;
  rateOfReturn: number;
  yearlyTotalInvestment: arr[];
  monthlyRevenue: arr[];
}
const chartConfig = {
  value: {
    label: "value",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function Linechart() {
  const [jobs, setjobs] = useState<info>({
    totalInvestment: 0,
    rateOfReturn: 0,
    yearlyTotalInvestment: [], // Initialize as an empty array
    monthlyRevenue: [], // Initialize as an empty array
  });
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRandomInvestementData(11, 50, token);
        // console.log(data);
        setjobs(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (Loading) {
    return <div>loading</div>;
  }
  console.log(jobs);
  const { yearlyTotalInvestment } = jobs;
  return (
    <Card className="bg-white rounded-3xl border-none ">
      <CardContent className="pt-8 pb-6 w-full">
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={yearlyTotalInvestment}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 4)}
            />
            <YAxis
              dataKey="value"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              // tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel={false} />}
            />
            <Line
              dataKey="value"
              type="linear"
              stroke="#FCAA0B"
              strokeWidth={3}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
