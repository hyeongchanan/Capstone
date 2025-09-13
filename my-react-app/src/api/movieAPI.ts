import { Movie } from "../type/product";
import apiFetch from "./apiFetch";

export async function listMovies(): Promise<Movie[]> {
  return await apiFetch("/movies");
}

async function getMovie(id : number) {
  return await apiFetch(`/movies/${id}`);
}


async function searchMovies(query : string) {
  const qs = new URLSearchParams({ query }).toString();
  return await apiFetch(`/movies/search?${qs}`);
}