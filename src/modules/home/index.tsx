import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { FastestProductsChart } from "./components/FastestProductsChart";
import { useBestYieldProductQuery } from "@/hooks/useBestYieldProductQuery";
import { useFastestProductsQuery } from "@/hooks/useFastestProductsQuery";
import { TopProductsChart } from "./components/TopProductsChart";
import { useTotalSalesQuery } from "@/hooks/useTotalSalesQuery";
import { formatMoney } from "@/lib/utils";

function HomeComponent() {
  const { data: bestYield } = useBestYieldProductQuery();
  const { data: fastestProducts } = useFastestProductsQuery();
  const { data: totalSales } = useTotalSalesQuery();

  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4">
      <div className="col-span-2 flex gap-4 flex-1">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Total vendido</CardTitle>
          </CardHeader>
          <div className="flex items-center justify-center w-full h-full">
            <div className="flex flex-col">
              <span className="text-8xl leading-none font-bold">
                {formatMoney(totalSales?.totalSoldValue ?? 0)}
              </span>
            </div>
          </div>
        </Card>
      </div>

      <div className="col-span-2 row-span-2 col-start-3 flex flex-col gap-4">
        <TopProductsChart data={totalSales?.products ?? []} />
        <FastestProductsChart data={fastestProducts?.fastestProducts ?? []} />
      </div>
      <div className="col-span-2 row-start-2">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Produto com melhor rendimento</CardTitle>
          </CardHeader>
          <div className="flex items-center justify-center w-full h-full">
            <div className="flex flex-col">
              <span className="text-muted-foreground text-lg">
                {bestYield?.productName}
              </span>
              <span className="text-8xl leading-none font-bold">
                {bestYield?.yieldPerHectare}
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export const Home = HomeComponent;
