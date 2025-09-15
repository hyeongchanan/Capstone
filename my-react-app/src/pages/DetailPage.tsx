// DetailPage.tsx
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as S from "./DetailPage.styled";
import { Product } from "../type/product";
import { usegetMovie } from "../hook/useMovie";
import { BasicBase, Spacer } from "../style/common.styled";
import { useState } from "react";

export default function DetailPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const product: Product = location.state?.product;
  const { parm } = useParams<{ parm: string }>();
  console.log(product);

  if (!product) {
    return <div>상품 정보를 불러올 수 없습니다.</div>;
  }

  const { data: movie } = usegetMovie(product.movieId ?? 0);

  // ⭐ 리뷰 작성 상태
  const [rating, setRating] = useState<number>(0);
  const [reviewMsg, setReviewMsg] = useState<string>("");

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("작성된 리뷰:", { rating, reviewMsg });
    alert("리뷰가 등록되었습니다! (mock)");
    setRating(0);
    setReviewMsg("");
  };

  // ⭐ 별 렌더링
  const renderStars = (value: number, onClick?: (v: number) => void) => {
    return (
      <S.StarsWrapper>
        {[1, 2, 3, 4, 5].map((star) => {
          if (value >= star) {
            return (
              <span
                key={star}
                className="full"
                onClick={() => onClick?.(star)}
              >
                ★
              </span>
            );
          } else if (value >= star - 0.5) {
            return (
              <span
                key={star}
                className="half"
                onClick={() => onClick?.(star - 0.5)}
              >
                ★
              </span>
            );
          } else {
            return (
              <span key={star} onClick={() => onClick?.(star)}>
                ★
              </span>
            );
          }
        })}
      </S.StarsWrapper>
    );
  };

  return (
    <BasicBase>
      <S.Container>
        <Spacer h={110} />
        <S.BackButton onClick={() => navigate(-1)}>← 뒤로가기</S.BackButton>

        {/* 상단: 이미지 + 정보 */}
        <S.TopSection>
          <S.ImageContainer>
            <S.Image src={product.imageLink ?? ""} />
          </S.ImageContainer>
          <S.Info>
            <S.Title>{product.blurayTitle}</S.Title>
            <S.Title>{movie.title}</S.Title>
            <S.Prices>
              <S.Price>{product.price}원</S.Price>
            </S.Prices>
            <S.Mall>{product.siteName}</S.Mall>
          </S.Info>
        </S.TopSection>

        {/* 작품 상세정보: 표 */}
        <S.Section>
          <h2>작품 상세정보</h2>
          <S.Table>
            <tbody>
              <tr>
                <th>러닝타임</th>
                <td>{movie.runningTime || "-"}</td>
              </tr>
              <tr>
                <th>감독</th>
                <td>{movie.director || "-"}</td>
              </tr>
              <tr>
                <th>해상도</th>
                <td>{product.quality || "-"}</td>
              </tr>
              <tr>
                <th>지역코드</th>
                <td>{product.regionCode || "-"}</td>
              </tr>
            </tbody>
          </S.Table>
        </S.Section>

        {/* 리뷰 */}
        <S.Section>
          <h2>리뷰</h2>
          <S.Meta>
            {product.reviews?.length > 0
              ? product.reviews.map((review, idx) => (
                  <div key={idx}>{review}</div>
                ))
              : "아직 등록된 리뷰가 없습니다."}
          </S.Meta>

          {/* ⭐ 리뷰 작성 Form */}
          <S.ReviewForm onSubmit={handleReviewSubmit}>
            <label>별점:</label>
            {renderStars(rating, (val) => setRating(val))}

            <S.ReviewInput
              placeholder="리뷰를 작성해주세요..."
              value={reviewMsg}
              onChange={(e) => setReviewMsg(e.target.value)}
            />

            <S.SubmitButton type="submit">리뷰 등록</S.SubmitButton>
          </S.ReviewForm>
        </S.Section>

        {/* 외부 링크 */}
        <S.Section>
          <h2>외부 링크</h2>
          <S.Meta>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <a className="button" href="#" target="_blank" rel="noopener noreferrer">
                YES24
              </a>
              <a className="button" href="#" target="_blank" rel="noopener noreferrer">
                Aladin
              </a>
              <a className="button" href="#" target="_blank" rel="noopener noreferrer">
                Amazon JP
              </a>
              <a className="button" href="#" target="_blank" rel="noopener noreferrer">
                공식 사이트
              </a>
            </div>
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
    </BasicBase>
  );
}
