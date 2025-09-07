
import ProductCard from "./ProductCard";
import * as S from "./ProductList.styled";

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

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <S.List>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </S.List>
  );
}
