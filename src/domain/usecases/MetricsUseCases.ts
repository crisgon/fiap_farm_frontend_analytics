import { request } from "@/infrastructure/api/client";
import type {
  BestYieldProduct,
  FastestProducts,
  MostProducedProduct,
  TopSoldProducts,
  TotalSales,
} from "../repositories/MetricsRepository";

export const getTopSoldProducts = (): Promise<TopSoldProducts> => {
  return request<TopSoldProducts>("GET", "metrics/top-sold-products");
};

export const getBestYieldProduct = (): Promise<BestYieldProduct> => {
  return request<BestYieldProduct>("GET", "metrics/best-yield-product");
};

export const getTotalSales = (): Promise<TotalSales> => {
  return request<TotalSales>("GET", "metrics/total-sales");
};

export const getFastestProducts = (): Promise<FastestProducts> => {
  return request<FastestProducts>("GET", "metrics/fastest-products");
};

export const getMostProducedProduct = (): Promise<MostProducedProduct[]> => {
  return request<MostProducedProduct[]>("GET", "metrics/fastest-products");
};
