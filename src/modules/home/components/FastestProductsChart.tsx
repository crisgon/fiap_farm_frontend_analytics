"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { FastestProduct } from "@/domain/repositories/MetricsRepository";

export const description = "A bar chart with a custom label";

interface FastestProductsChartProps {
  data: FastestProduct[];
}

export function FastestProductsChart({ data }: FastestProductsChartProps) {
  const chartData = data.map((p) => ({
    productId: p.productId,
    productName: p.productName,
    value: p.averageProductionDays ?? 1,
    fill: `var(--color-${p.productId})`,
  }));

  const chartConfig = data.reduce(
    (acc, current, index) => {
      return {
        ...acc,
        [current.productId]: {
          label: current.productName,
          color: `var(--chart-${index + 1})`,
        },
      };
    },
    {
      label: {
        color: "var(--background)",
      },
    }
  ) satisfies ChartConfig;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Produções mais rápidas</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="productName"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              hide
            />
            <XAxis dataKey="value" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="value"
              layout="vertical"
              fill="var(--color-productId)"
              radius={4}
            >
              <LabelList
                dataKey="productName"
                position="insideLeft"
                offset={8}
                className="fill-(--color-label)"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          {chartData.length} produtos com produção mais rápidas
          <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
