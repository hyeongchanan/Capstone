import { useNavigate } from "react-router-dom";
import * as S from "./ProductCard.styled";

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

export default function ProductCard({ product }: { product: Product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/static/DetailPage/${product.id}`, { state: { product } });
  };

  return (
    <S.CardSection>
      <S.Card onClick={handleClick}>
        <S.ImageWrapper>
          <S.Image src={product.image} alt={product.title} />
        </S.ImageWrapper>

        <S.Areas>
          <S.Title>{product.title}</S.Title>
          <S.Prices>
            {product.discountRate && <S.Discount>{product.discountRate}%</S.Discount>}
            <S.Price>
              {product.price.toLocaleString()}
              <span>원</span>
            </S.Price>
            {product.originalPrice && (
              <S.OriginalPrice>{product.originalPrice.toLocaleString()}원</S.OriginalPrice>
            )}
          </S.Prices>
        </S.Areas>

        <S.Aside>
          <S.Mall>{product.mall}</S.Mall>
          {product.ad && <S.Ad>광고</S.Ad>}
          {product.easyPayIcon && (
            <S.EasyPay>
              <img src={product.easyPayIcon} alt="간편결제" />
            </S.EasyPay>
          )}
        </S.Aside>
      </S.Card>
    </S.CardSection>
  );
}
