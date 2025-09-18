import { useNavigate } from "react-router-dom";
import { Product } from "../type/product";
import * as S from "./ProductCardSimple.styled";



export default function ProuductCardSimple({ product }: { product: Product }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/static/DetailPage/${product.movieId}`, { state: { product } });
  };


  return (
    <S.Card onClick={handleClick}>
      <S.ImageWrapper>
        <S.Image src={product.imageLink ?? ""} />
      </S.ImageWrapper>
      <S.Info>
        <S.Title>{product.blurayTitle}</S.Title>
        <S.PriceBox>
            <S.Price>{product.price?.toLocaleString()}원</S.Price>
            <S.Qualty> 해상도 : {product.quality}</S.Qualty>
        </S.PriceBox>
        {product.isLimitedEdition && (
          <S.OriginalPrice>한정판!</S.OriginalPrice>
        )}
        <S.Mall>{product.siteName}</S.Mall>
      </S.Info>
    </S.Card>
  );
}
