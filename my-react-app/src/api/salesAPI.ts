import { Product } from "../type/product";
import apiFetch from "./apiFetch";

export async function listSales(limit?: number): Promise<Product[]> {
  const qs = limit ? `?limit=${encodeURIComponent(limit)}` : "";
  return await apiFetch(`/sales${qs}`);
}
