import { Product } from "../type/product";
import * as S from "./ProuductCardSimple.styled";



export default function ProuductCardSimple({ product }: { product: Product }) {
  return (
    <S.Card>
      <S.ImageWrapper>
        <S.Image alt={product.siteName ?? ""} />
      </S.ImageWrapper>
      <S.Info>
        <S.Title>{product.siteName}</S.Title>
        <S.PriceBox>
          <S.Price>{product.price?.toLocaleString()}원</S.Price>
        </S.PriceBox>
        {product.isLimitedEdition && (
          <S.OriginalPrice>한정판!</S.OriginalPrice>
        )}
        <S.Mall>{product.siteName}</S.Mall>
      </S.Info>
    </S.Card>
  );
}
