import { Suspense, useEffect, useState } from "react";
import { listMovies } from "../api/movieAPI";
import * as S from "./ProductList.styled"; // 그대로 재활용 가능
import ProductCard from "./ProductCard";
import { Movie } from "../type/product";
import Loading from "./Loading";
import { useGetSale, useListSales, useSearchSale } from "../hook/useSales";
import { useParams } from "react-router-dom";

export default function ProductList() {

  const { keyWord } = useParams<{ keyWord: string }>();

  if (keyWord === undefined) {
  // id가 없으면 렌더링하지 않거나 에러 처리
  return <div>Invalid ID</div>;
  }
  

  

  const { data : products} = useSearchSale(keyWord);
  console.log(products.length)
  if(products.length === 0){
    return <div>검색 결과가 없습니다</div>;
  }
  return (
    <S.List>
      {products.map((m) => (
        <ProductCard key={m.id} product={m} />
      ))}
    </S.List>
  );
}