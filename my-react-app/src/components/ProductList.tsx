import { useEffect, useState } from "react";
import { listMovies } from "../api/movieAPI";
import * as S from "./ProductList.styled"; // 그대로 재활용 가능
import ProductCard from "./ProductCard";
import { Movie } from "../type/product";

export default function ProductList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    listMovies().then(setMovies);
  }, []);

  return (
    <S.List>
      {movies.map((m) => (
        <ProductCard key={m.id} movie={m} />
      ))}
    </S.List>
  );
}