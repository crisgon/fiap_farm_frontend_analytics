export interface Product {
  productId: string;
  productName: string;
  totalSold: number;
  totalRevenue: number;
}

export interface TopSoldProducts {
  topProducts: Product[];
}

export interface FastestProduct {
  productId: string;
  productName: string;
  averageProductionDays: number;
}

export interface FastestProducts {
  fastestProducts: FastestProduct[];
}

export interface MostProducedProduct {
  productId: string;
  productName: string;
  totalHarvested: number;
}

export interface TotalSalesProduct {
  productId: string;
  productName: string;
  totalRevenue: number;
  totalQuantity: number;
  salesCount: number;
}

export interface TotalSales {
  products: TotalSalesProduct[];
  totalSoldValue: number;
}

export interface BestYieldProduct {
  productId: string;
  productName: string;
  yieldPerHectare: number;
  totalHarvested: number;
  totalArea: number;
  productionCount: number;
}

export interface FastestProduct {
  productId: string;
  productName: string;
  averageProductionDays: number;
}

export interface FastestProducts {
  fastestProducts: FastestProduct[];
}
