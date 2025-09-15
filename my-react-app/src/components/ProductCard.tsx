import { useNavigate } from "react-router-dom";
import * as S from "./ProductCard.styled";
import { Movie, Product } from "../type/product";
import { Spacer } from "../style/common.styled";

export default function ProductCard({ product }: { product: Product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/static/DetailPage/${product.movieId}`, { state: { product } });
  };

  return (
    <S.CardSection>
      <S.Card onClick={handleClick}>
        <S.ImageWrapper>
          <S.Image src={product.imageLink ?? undefined} />
        </S.ImageWrapper>

        <S.InfoArea>
          <S.Title>{product.blurayTitle}</S.Title>
          <S.Price>{product.price}원</S.Price>
          <Spacer h={20}/>
          <S.Describe> 해상도 : {product.quality}</S.Describe>
          <S.Describe> 지역 코드 : {product.regionCode}</S.Describe>
          {product.isLimitedEdition && (
            <S.Describe>한정판!</S.Describe>
          )}
        </S.InfoArea>

        <S.Aside></S.Aside>
        <S.Aside>
          <S.Mall>{product.siteName}</S.Mall>
        </S.Aside>
      </S.Card>
    </S.CardSection>
  );
}
