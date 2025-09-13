import { useNavigate } from "react-router-dom";
import * as S from "./ProductCard.styled";
import { Movie } from "../type/product";

export default function ProductCard({ movie }: { movie: Movie }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/static/DetailPage/${movie.id}`, { state: { movie } });
  };

  return (
    <S.CardSection>
      <S.Card onClick={handleClick}>
        <S.Areas>
          <S.Title>{movie.title}</S.Title>
          <S.Prices>
            <S.Price>{movie.releaseDate ? movie.releaseDate.slice(0, 10) : "개봉일 미정"}</S.Price>
          </S.Prices>
        </S.Areas>

        <S.Aside>
          <S.Mall>{movie.productionCompany}</S.Mall>
          <S.Mall>{movie.distributionCompany}</S.Mall>
          <S.Mall>{movie.runningTime}</S.Mall>
        </S.Aside>
      </S.Card>
    </S.CardSection>
  );
}
