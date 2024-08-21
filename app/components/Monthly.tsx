"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";
import { getRandomInvestementData } from "../back/Invest";

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
const chartConfig = {
  value: {
    label: "value",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;
interface arr {
  time: string;
  value: number;
}  
const token ="eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJsc2FqZGxzanNuIiwiaWF0IjoxNzI0MTU1NzkzLCJleHAiOjE3MjQyNDIxOTN9.wi7oRgF81zMp1v8tPzRPmAj4GOLaYy4bV_TMVvtWmzg2mjrTThiruT_Fswcyu1eq";

interface info {
  totalInvestment: number;
  rateOfReturn: number;
  yearlyTotalInvestment: arr[];
  monthlyRevenue: arr[];
}

export default function Monthly() {
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
        const data = await getRandomInvestementData(11, 2021, token);
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
  const { monthlyRevenue } = jobs;
  return (
    <Card className="bg-white rounded-3xl border-none ">
      <CardContent className="pt-8 pb-6 ">
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={monthlyRevenue}
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
              tickFormatter={(value) => value.slice(0, 7)}
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
              type="natural"
              stroke="#16DBCC"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
