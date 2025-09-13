
import { useEffect, useState } from "react";
import * as S from "./ProductSimpleList.styled";
import ProuductCardSimple from "./ProuductCardSimple";
import { listSales } from "../api/salesAPI";
import { Product } from "../type/product";
import { useListSales } from "../hook/useSales";


export default function ProductSimpleList() {
  
  const { data : products} = useListSales(10);

  

  return (
    <S.Grid>
      {products.map((p) => (
        <ProuductCardSimple key={p.id} product={p} />
      ))}
    </S.Grid>
  );
}
