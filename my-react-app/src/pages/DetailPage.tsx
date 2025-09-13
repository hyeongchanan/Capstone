import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as S from "./DetailPage.styled";
import { Product } from "../type/product";
import { usegetMovie } from "../hook/useMovie";

export default function DetailPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const product : Product = location.state?.product;
  const { parm } = useParams<{ parm: string }>();
  console.log(product)

  if (!product) {
    return <div>상품 정보를 불러올 수 없습니다.</div>;
  }

    const { data : movie} = usegetMovie(product.movieId ?? 0);

  return (
    <S.Container>
      <S.BackButton onClick={() => navigate(-1)}>← 뒤로가기</S.BackButton>
      <S.Image src={product.imageLink ?? ''} alt={product.blurayTitle} />
      <S.Info>
        <S.Title>{product.blurayTitle}</S.Title>
        <S.Title>{movie.title}</S.Title>
        <S.Prices>
          <S.Discount>%</S.Discount>
          <S.Price>{product.price}원</S.Price>
        </S.Prices>
        <S.Mall>{product.siteName}</S.Mall>
      </S.Info>

      {/* 작품 소개 */}
      <S.Section>
        <h2>설명</h2>
        <S.Meta>{movie.runningTime}</S.Meta>
        <S.Meta>{movie.director || "작품 소개 텍스트 영역"}</S.Meta>
      </S.Section>

      {/* 디스크 스펙 */}
      <S.Section>
        <h2>디스크 스펙</h2>
        <S.Meta>{product.quality || "해상도, 오디오, 자막, 부가영상 등"}</S.Meta>
        <S.Meta>{product.regionCode}</S.Meta>
      </S.Section>

      {/* 리뷰 */}
      <S.Section>
        <h2>리뷰</h2>
        <S.Meta>
          {/* 실제 리뷰 리스트를 맵으로 돌려서 출력 가능 */}
          {product.reviews?.length > 0
            ? product.reviews.map((review, idx) => <div key={idx}>{review}</div>)
            : "사용자 리뷰 리스트"}
        </S.Meta>
      </S.Section>

      {/* 리뷰 남기기 */}
      <S.Section>
        <h2>리뷰 남기기</h2>
        <S.Meta>
          <S.RatingGroup role="radiogroup" aria-label="선호도 선택">
            <label><input type="radio" name="rating" value="like" /> 좋아요</label>
            <label><input type="radio" name="rating" value="dislike" /> 싫어요</label>
            <label><input type="radio" name="rating" value="neutral" /> 그저 그래요</label>
          </S.RatingGroup>
          <S.RatingHelp>선호도를 선택하고 코멘트를 입력하세요.</S.RatingHelp>
          <textarea className="input" rows={4} placeholder="작품에 대한 의견을 남겨주세요" />
          <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
            <button className="button">제출</button>
            <button className="button">취소</button>
          </div>
        </S.Meta>
      </S.Section>

      {/* 외부 링크 */}
      <S.Section>
        <h2>외부 링크</h2>
        <S.Meta>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <a className="button" href="#" target="_blank" rel="noopener noreferrer">YES24</a>
            <a className="button" href="#" target="_blank" rel="noopener noreferrer">Aladin</a>
            <a className="button" href="#" target="_blank" rel="noopener noreferrer">Amazon JP</a>
            <a className="button" href="#" target="_blank" rel="noopener noreferrer">공식 사이트</a>
          </div>
          <S.RatingHelp>가격/재고는 해당 사이트에서 확인하세요.</S.RatingHelp>
        </S.Meta>
      </S.Section>

      {/* 연관 추천 */}
      <S.Section>
        <h2>연관 추천</h2>
        <S.Grid>
          {[...Array(5)].map((_, idx) => (
            <S.Card key={idx}>카드</S.Card>
          ))}
        </S.Grid>
      </S.Section>
    </S.Container>
  );
}
