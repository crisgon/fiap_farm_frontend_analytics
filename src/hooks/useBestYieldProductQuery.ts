import { getBestYieldProduct } from "@/domain/usecases/MetricsUseCases";
import { useQuery } from "@tanstack/react-query";

export function useBestYieldProductQuery() {
  return useQuery({
    queryKey: ["best-yield-product"],
    queryFn: () => getBestYieldProduct(),
  });
}
