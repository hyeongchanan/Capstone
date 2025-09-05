// src/components/Card.tsx
import { FC, ReactNode } from "react";
import { CardContent, CardSection, Overlay, PrdocutImg, PrdocutImgContainer } from "./Card.styled";

interface CardProps {
  children: ReactNode;
  className?: string;
}


interface CardContentProps {
  children: ReactNode;
  className?: string;
}



interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "default" | "outline";
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  variant = "default",
}) => {
  return (
    <button
      onClick={onClick}
    >
      {children}
    </button>
  );
};

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  onAddToCart?: (id: number) => void;
}

const ProductCard: FC<ProductCardProps> = ({ id, name, price, imageUrl, onAddToCart }) => {
  return (
    <CardSection>
      <PrdocutImgContainer>
        <PrdocutImg
          src={imageUrl}
          alt={name}
        />
        <Overlay />
      </PrdocutImgContainer>
      <CardContent>
        <h3 className="text-lg font-semibold truncate">{name}</h3>
        <p className="text-gray-600 text-sm">{price.toLocaleString()}원</p>
        <Button
          className="mt-2 w-full rounded-xl"
          onClick={() => onAddToCart && onAddToCart(id)}
        >
          장바구니 담기
        </Button>
      </CardContent>
    </CardSection>
  );
};

export default ProductCard;
