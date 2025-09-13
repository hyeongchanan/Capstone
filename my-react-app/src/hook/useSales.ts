// src/hooks/useSales.ts
import { useSuspenseQuery } from "@tanstack/react-query";
import { getSale, listSales, searchSales } from "../api/salesAPI";
import { Product } from "../type/product";

export function useListSales(limit?: number) {
  return useSuspenseQuery<Product[], Error>({
    queryKey: ["listSales", limit],
    queryFn: () => listSales(limit),
  });
}

export function useGetSale(id: number) {
  return useSuspenseQuery<Product, Error>({
    queryKey: ["getSale", id],
    queryFn: () => getSale(id),
  });
}

export function useSearchSale(query: string) {
  return useSuspenseQuery<Product[], Error>({
    queryKey: ["SearchSale", query],
    queryFn: () => searchSales(query),
  });
}
