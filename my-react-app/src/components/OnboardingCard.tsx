import React from "react";
import { Product } from "../type/product";
import * as S from "./OnboardingCard.styled";

interface OnboardingCardProps {
  product: Product;
  isSelected: boolean;
  onClick: () => void;
}

const OnboardingCard = React.memo(({ product, isSelected, onClick }: OnboardingCardProps) => {
  return (
    <S.Card 
      isSelected={isSelected}
      onClick={onClick}
    >
      <S.ImageWrapper>
        <S.Image src={product.imageLink ?? ""} alt={product.blurayTitle} />
        {isSelected && <S.SelectedOverlay />}
      </S.ImageWrapper>
      <S.Info>
        <S.Title>{product.blurayTitle}</S.Title>
        <S.PriceBox>
          <S.Price>{product.price?.toLocaleString()}원</S.Price>
          <S.Quality>해상도: {product.quality}</S.Quality>
        </S.PriceBox>
      </S.Info>
      {isSelected && <S.Checkmark>✓</S.Checkmark>}
    </S.Card>
  );
});

OnboardingCard.displayName = 'OnboardingCard';

export default OnboardingCard;
