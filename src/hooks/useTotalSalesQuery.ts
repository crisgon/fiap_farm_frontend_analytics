import { getTotalSales } from "@/domain/usecases/MetricsUseCases";
import { useQuery } from "@tanstack/react-query";

export function useTotalSalesQuery() {
  return useQuery({
    queryKey: ["total-sales"],
    queryFn: () => getTotalSales(),
  });
}
