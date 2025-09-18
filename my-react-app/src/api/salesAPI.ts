import { Product } from "../type/product";
import apiFetch from "./apiFetch";

export async function listSales(limit?: number): Promise<Product[]> {
  const qs = limit ? `?limit=${encodeURIComponent(limit)}` : "";
  return await apiFetch(`/sales${qs}`);
}

export async function getSale(id: number): Promise<Product> {
  return await apiFetch(`/sales/${id}`);
}

export async function searchSales(query: string): Promise<Product[]> {
  const qs = new URLSearchParams({ query }).toString();
  return await apiFetch(`/sales/search?${qs}`);
}
/*
export async function runRes = await axios.post(
  "/api/recommendations/run",
  { userId, topN: 5 },
  { headers: { Authorization: `Bearer ${token}` } }
);
*/

