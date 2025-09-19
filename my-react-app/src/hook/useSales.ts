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
    enabled: !!query, // query가 있을 때만 실행
    staleTime: 5 * 60 * 1000, // 5분간 캐시 유지
    cacheTime: 10 * 60 * 1000, // 10분간 메모리에 유지
  });
}
