// src/components/Card.tsx
import { FC, ReactNode } from "react";
import clsx from "clsx";
import { CardSection, Overlay, PrdocutImg, PrdocutImgContainer } from "./Card.styled";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <CardSection
      className={clsx(
        "bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden",
        className
      )}
    >
      {children}
    </CardSection>
  );
};

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export const CardContent: FC<CardContentProps> = ({ children, className }) => {
  return <div className={clsx("p-4", className)}>{children}</div>;
};


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
      className={clsx(
        "px-4 py-2 rounded-xl font-medium transition-colors",
        variant === "default" &&
        "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700",
        variant === "outline" &&
        "border border-gray-300 text-gray-700 hover:bg-gray-100",
        className
      )}
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
    <CardSection className="w-64 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
      <PrdocutImgContainer>
        <PrdocutImg
          src={imageUrl}
          alt={name}
          className="w-full h-40 object-cover rounded-t-2xl"
        />
        <Overlay />
      </PrdocutImgContainer>
      <CardContent className="p-4 flex flex-col gap-2">
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
