
import { useEffect, useState } from "react";
import * as S from "./ProductSimpleList.styled";
import ProuductCardSimple from "./ProuductCardSimple";
import { listSales } from "../api/salesAPI";
import { Product } from "../type/product";


export default function ProductSimpleList() {

  
  
  const [products, setProducts] = useState<Product[]>([]);


  useEffect(() => {
    listSales(10).then(setProducts);
  }, []);
  

  return (
    <S.Grid>
      {products.map((p) => (
        <ProuductCardSimple key={p.id} product={p} />
      ))}
    </S.Grid>
  );
}
