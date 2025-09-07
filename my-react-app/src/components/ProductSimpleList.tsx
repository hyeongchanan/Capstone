
import * as S from "./ProductSimpleList.styled";
import ProuductCardSimple from "./ProuductCardSimple";

type Product = {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  discountRate?: number;
  image: string;
  mall: string;
  ad?: boolean;
  easyPayIcon?: string;
};

export default function ProductSimpleList({ products }: { products: Product[] }) {
  return (
    <S.Grid>
      {products.map((p) => (
        <ProuductCardSimple key={p.id} product={p} />
      ))}
    </S.Grid>
  );
}
