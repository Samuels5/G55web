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
const chartData = [
  { month: "2016", desktop: 5000 },
  { month: "2017", desktop: 25000 },
  { month: "2018", desktop: 18000 },
  { month: "2019", desktop: 40000 },
  { month: "2020", desktop: 21000 },
  { month: "2021", desktop: 30000 },
];
const yearlyTotalInvestment= [
    { time: '2024', value: 8628.87857800384 },
    { time: '2023', value: 11853.099227850493 },
    { time: '2022', value: 9692.112250270111 },
    { time: '2021', value: 16710.45173864098 },
    { time: '2020', value: 11579.387500155073 },
    { time: '2019', value: 9597.459730214243 },
    { time: '2018', value: 10976.335946226738 },
    { time: '2017', value: 15713.224021927466 },
    { time: '2016', value: 8338.168989401462 },
    { time: '2015', value: 10191.494039312762 },
    { time: '2014', value: 15488.810804375344 },
    { time: '2013', value: 9288.956413390159 },
    { time: '2012', value: 5112.479818826294 },
    { time: '2011', value: 14483.43735429671 },
    { time: '2010', value: 5955.754008271433 },
    { time: '2009', value: 7042.459569821253 },
    { time: '2008', value: 19794.462711603934 },
    { time: '2007', value: 10386.202795872003 },
    { time: '2006', value: 6273.135243122041 },
    { time: '2005', value: 19844.44935426064 },
    { time: '2004', value: 10996.566838646253 },
    { time: '2003', value: 8838.07712046207 },
    { time: '2002', value: 5816.581644114739 },
    { time: '2001', value: 12292.521978762754 },
    { time: '2000', value: 10607.39577727074 },
    { time: '1999', value: 16700.702170645734 },
    { time: '1998', value: 16627.10266548254 },
    { time: '1997', value: 14230.310187193661 },
    { time: '1996', value: 6409.579614370492 },
    { time: '1995', value: 14946.244876415827 },
    { time: '1994', value: 6281.319376383135 },
    { time: '1993', value: 11471.157733384185 },
    { time: '1992', value: 19733.877266622338 },
    { time: '1991', value: 18410.457070242817 },
    { time: '1990', value: 18859.376134674567 },
    { time: '1989', value: 11844.322442801174 },
    { time: '1988', value: 17650.09979965759 },
    { time: '1987', value: 11156.88433384202 },
    { time: '1986', value: 14621.953750604724 },
    { time: '1985', value: 5997.146103103659 },
    { time: '1984', value: 14815.539173167665 },
    { time: '1983', value: 14109.783792126022 },
    { time: '1982', value: 5799.7945879900235 },
    { time: '1981', value: 8045.816110319293 },
    { time: '1980', value: 16815.477485486677 },
    { time: '1979', value: 9069.368738708139 },
    { time: '1978', value: 11284.899160232018 },
    { time: '1977', value: 19170.266180615414 },
    { time: '1976', value: 19637.952267491903 },
    { time: '1975', value: 15522.80405329368 },
    { time: '1974', value: 6992.031158210042 },
    { time: '1973', value: 17595.449238907997 },
    { time: '1972', value: 8826.325596015542 },
    { time: '1971', value: 13807.924295865972 },
    { time: '1970', value: 11232.430493634904 },
    { time: '1969', value: 11091.639333864923 },
    { time: '1968', value: 11848.327974248044 },
    { time: '1967', value: 15173.958487485199 },
    { time: '1966', value: 15608.604964861397 },
    { time: '1965', value: 18160.60569113374 },
    { time: '1964', value: 13309.105073509727 },
    { time: '1963', value: 11114.597772889036 },
    { time: '1962', value: 16699.829007049724 },
    { time: '1961', value: 6452.423310215407 },
    { time: '1960', value: 9818.419180817673 },
    { time: '1959', value: 11023.544017163822 },
    { time: '1958', value: 17162.46344282197 },
    { time: '1957', value: 11679.374586445154 },
    { time: '1956', value: 9598.523857031538 },
    { time: '1955', value: 8741.235176031189 },
    { time: '1954', value: 16817.453154513627 },
    { time: '1953', value: 17358.817300068058 },
    { time: '1952', value: 6289.344798409017 },
    { time: '1951', value: 19923.74962069305 },
    { time: '1950', value: 14839.350990557592 },
    { time: '1949', value: 5126.077251848892 },
    { time: '1948', value: 6871.4671275218825 },
    { time: '1947', value: 13370.939341140021 },
    { time: '1946', value: 13296.961584394678 },
    { time: '1945', value: 7111.355651505704 },
    { time: '1944', value: 10185.054011542881 },
    { time: '1943', value: 15500.655236236189 },
    { time: '1942', value: 10025.186481674606 },
    { time: '1941', value: 15971.316270051235 },
    { time: '1940', value: 15174.174112612955 },
    { time: '1939', value: 8049.476796929585 },
    { time: '1938', value: 10130.899698270681 },
    { time: '1937', value: 9606.452784224768 },
    { time: '1936', value: 11731.149337000294 },
    { time: '1935', value: 14817.663293653572 },
    { time: '1934', value: 5352.666651416334 },
    { time: '1933', value: 16379.510095339598 },
    { time: '1932', value: 11854.387082190442 },
    { time: '1931', value: 13857.103196309277 },
    { time: '1930', value: 14004.873740764702 },
    { time: '1929', value: 12778.170177044036 },
    { time: '1928', value: 19765.787892702505 },
    { time: '1927', value: 16925.833762655868 },
    { time: '1926', value: 11341.31376671554 },
    { time: '1925', value: 18936.885257019298 }]

const chartConfig = {
  value: {
    label: "value",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function Linechart() {
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
