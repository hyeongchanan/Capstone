import * as S from "./ProuductCardSimple.styled";

type Product = {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  discountRate?: number;
  image: string;
  mall: string;
};

export default function ProuductCardSimple({ product }: { product: Product }) {
  return (
    <S.Card>
      <S.ImageWrapper>
        <S.Image src={product.image} alt={product.title} />
      </S.ImageWrapper>
      <S.Info>
        <S.Title>{product.title}</S.Title>
        <S.PriceBox>
          {product.discountRate && <S.Discount>{product.discountRate}%</S.Discount>}
          <S.Price>{product.price.toLocaleString()}원</S.Price>
        </S.PriceBox>
        {product.originalPrice && (
          <S.OriginalPrice>{product.originalPrice.toLocaleString()}원</S.OriginalPrice>
        )}
        <S.Mall>{product.mall}</S.Mall>
      </S.Info>
    </S.Card>
  );
}
