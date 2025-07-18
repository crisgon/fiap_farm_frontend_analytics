import { getFastestProducts } from "@/domain/usecases/MetricsUseCases";
import { useQuery } from "@tanstack/react-query";

export function useFastestProductsQuery() {
  return useQuery({
    queryKey: ["fastest-products"],
    queryFn: () => getFastestProducts(),
  });
}
