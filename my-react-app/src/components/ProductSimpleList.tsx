import { useRef } from "react";
import * as S from "./ProductSimpleList.styled";
import ProuductCardSimple from "./ProuductCardSimple";
import { useListSales } from "../hook/useSales";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProductSimpleList() {
  const { data: products } = useListSales(10);
  const scrollRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();


  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth; // 한 번에 이동할 거리
      scrollRef.current.scrollBy({
        left: direction === "right" ? width : -width,
        behavior: "smooth",
      });
    }
  };

  const { user } = useAuth();

  if (!user) {
    return( 
    <S.WhiteContainer>
      로그인하고 추천을 받아보세요!
      <S.LoginButton onClick={() => navigate('/static/Login')}>
        login
      </S.LoginButton>
    </S.WhiteContainer>
    )
  }

  return (
    <S.ListWrapper>
    <S.CarouselWrapper>
      <S.ScrollButton left onClick={() => scroll("left")}>◀</S.ScrollButton>
      <S.ProductWrapper>
      <S.Grid ref={scrollRef}>
        {products.map((p) => (
          <ProuductCardSimple key={p.id} product={p} />
        ))}
      </S.Grid>

      </S.ProductWrapper>
      <S.ScrollButton onClick={() => scroll("right")}>▶</S.ScrollButton>
    </S.CarouselWrapper>
    </S.ListWrapper>
  );
}
