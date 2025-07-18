import { getTopSoldProducts } from "@/domain/usecases/MetricsUseCases";
import { useQuery } from "@tanstack/react-query";

export function useTopSoldProductsQuery() {
  return useQuery({
    queryKey: ["top-sold-products"],
    queryFn: () => getTopSoldProducts(),
  });
}
